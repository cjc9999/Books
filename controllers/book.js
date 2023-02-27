const Book = require('../models/book');

// create a book
exports.createBook = (req, res) => {
  const book = new Book(req.body);

  book.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(book);
    }
  });
};

// get all books
exports.getBooks = (req, res) => {
  Book.find((err, books) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(books);
    }
  });
};

// update a book
exports.updateBook = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else if (!book) {
      res.status(404).send('Book not found');
    } else {
      book.author = req.body.author || book.author;

      book.save((err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(book);
        }
      });
    }
  });
};

// delete a book
exports.deleteBook = (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else if (!book) {
      res.status(404).send('Book not found');
    } else {
      res.status(204).send();
    }
  });
};
