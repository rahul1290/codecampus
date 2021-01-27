const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books-controllers');


router.get('/',bookController.getAllBooks);
router.post('/',bookController.createBooks);
router.get('/:bookId',bookController.getBookDetailById);
router.put('/:bookId',bookController.updateBook);
router.delete('/:bookId',bookController.deleteBook);

module.exports = router;