//setting express
const express = require('express');
const app = express();

//setting EJS as view engine
app.set('view engine', 'ejs');

//setting the files folder
app.use(express.static('public'));

//setting routes
app.use('/', require('./routes/routes.js'));

//running server
app.listen(6160,()=>{console.log('Server started.')});
