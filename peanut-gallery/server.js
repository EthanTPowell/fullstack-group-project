//libraries
const path = require('path')
const express = require('express');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 3003;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//scrape email and password form request header using html form
app.use(express.urlencoded({ extended: true }));

//scrape email and password form request header using Postman api
app.use(express.json());

app.use(require('./routes/index'));


app.listen(port, () => {
    console.log(`Server is running at Port: ${port}`);
});