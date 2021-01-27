const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
// const cors = require('cors');

const  appConfig = require('./config/app-config');
const connection = require('./config/db-config');
const booksRoutes = require('./routes/books-routes');

//const publicDirPath = path.join(__dirname, './../public');
const app = express();
const port = process.env.PORT || appConfig.DEFAULT_PORT;

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/books',booksRoutes);

app.listen(port, () => {
    console.log('Server is up on port 3002.')
})