const express = require('express');
const router = express.Router();
const db = require('../helpers/dbConnection');
const bcrypt = require('bcrypt');

router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'login.js router');
    next();
});

router.get('/login', async (req, res, next) => {
    return res.render('login')
    // const records = await db.Comment.findAll({include: [{model: db.User}]})
    // console.log(records);
})

router.post('/login', async (req, res, next) => {
    // console.log(User);
    const { username, password } = req.body;
    console.log(username);
    try {
        const records = await db.User.findAll({
            where: {username:username},include: [{
            model: db.Comment
        }] });
        console.log(records[0].dataValues);
        if (records !== null) {

            try {
                const isMatch = await bcrypt.compare(password, records[0].password)
                if (isMatch) {
                    req.session.user = username
                    // return res.send("hash matches")
                } else if (!isMatch) {
                    console.log('hash does not match');
                    return res.redirect('login')
                } else {
                    console.log('username does not match any registered users');
                    return res.redirect('register')
                }
            } catch(error) {
                console.log(`last catch error on /login: ${error}`);
                return res.redirect('login')
            }

            // if (password === records[0].dataValues.password) {
            //     return res.send('issamatch')

            // } else {
            //     console.log('password does not match');
            //     return res.render('login')
            // }
        }
    } catch (error) {
        console.log(error);
        console.log('That username does not match any in our records.')
        res.redirect('login')
    }


});

router.get('/logout', (req, res, next) => {
    req.session.destroy();
    if(!req.session){console.log('user logged out');}
    return res.redirect('login');
})

module.exports=router