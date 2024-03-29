const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

// define book routes
router.post('/', bookController.createBook);
router.get('/', bookController.getBooks);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
