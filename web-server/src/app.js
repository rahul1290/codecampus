const path = require('path');
const express = require('express');
const app = express();

const publicDir = path.join(__dirname,'../public');  

app.use(express.static(publicDir));

/*app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>');
})*/

app.listen(3002,()=>{
    console.log('web server running on port 3002');
})