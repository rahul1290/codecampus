const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'root',
    password: '',
    database: 'library'
});

connection.connect((error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("connected.");
});

module.exports = connection;