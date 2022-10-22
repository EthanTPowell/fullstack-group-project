//libraries
const cookieParser = require('cookie-parser');
const session = require('express-session')
const path = require('path')
const express = require('express');
require('dotenv').config()


const app = express();

const port = process.env.PORT || 3003;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(
    session(
        {
            secret: process.env.SECRET,//sign cookie
            resave: false, //update session even when no changes
            saveUninitialized: true, //always create a session
            cookie: {
                secure: false, //true only takes http reqs
                maxAge: 1000 * 60 * 60 * 24 //time in seconds
            }
        }
    )
);

//scrape email and password form request header using html form
app.use(express.urlencoded({ extended: true }));

//scrape email and password form request header using Postman api
app.use(express.json());

//setup public folder
app.use(express.static('./public'));

app.use(require('./routes/index'));
app.use(require('./routes/register.js'));
app.use(require('./routes/comments'));
app.use(require('./routes/login'));
app.get('*', (req, res, next) => {
    console.log("get catch all hit");
    req.session.destroy();
    if (!req.session) { console.log('user logged out'); }
    return res.redirect('/');
});
app.post('*', (req, res, next) => {
    req.session.destroy();
    console.log("post catch all hit");
    if (!req.session) { console.log('user logged out'); }
    return res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server is running at Port: ${port}`);
});