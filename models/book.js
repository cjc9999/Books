const mongoose = require('mongoose');

// define a book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

// create a book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
