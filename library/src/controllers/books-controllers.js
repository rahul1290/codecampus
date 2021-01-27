const connection = require('../config/db-config');

const getAllBooks = (req,res) => {
    const getBooksSql = "select * from books";
    connection.query(getBooksSql, (error,result) => {
        if(error){
            res.send({
                status : 500,
                data : error
            });
        }
        res.send({
            status : 200,
            data : result
        });
    });
}

const getBookDetailById = (req,res) => {   
    const bookid = req.params.bookId;
    const getMyBookSql = `select * from books where id = ${bookid}`;
    connection.query(getMyBookSql, (error,result) => {
        if(error){
            res.send({
                status : 500,
                data : error
            });
        }
        res.send({
            status : 200,
            data : result[0]
        });
    });
}

const createBooks = (req,res) => {
    const newBookData = {
        name : req.body.name,
        author : req.body.author
    }
    const addBookSql = "insert into books set ?";
    connection.query(addBookSql, newBookData, (error,result) => {
        if(error){
            res.send({
                status : 500,
                data : error
            });
        }
        res.send({
            status : 200,
            data : "Book added successfully."
        });
    });
}

const updateBook = (req,res) => {
    const bookid = req.params.bookId;
    const updateBookData = {
        name : req.body.name,
        author : req.body.author
    }
    const updateBookSql = `update books set ? where id = ${bookid}`;
    connection.query(updateBookSql, updateBookData, (error,result) => {
        if(error){
            res.send({
                status : 500,
                data : error
            });
        }
        res.send({
            status : 200,
            data : "Book updated successfully."
        });
    });
}

const deleteBook = (req,res) => {
    const bookid = req.params.bookId;
    const deleteBookSql = `delete from books where id = ${bookid}`;
    connection.query(deleteBookSql, (error,result) => {
        if(error){
            res.send({
                status : 500,
                data : error
            });
        }
        res.send({
            status : 200,
            data : "Book deleted successfully."
        });
    });
}

module.exports = {
    getAllBooks,
    getBookDetailById,
    updateBook,
    createBooks,
    deleteBook
}