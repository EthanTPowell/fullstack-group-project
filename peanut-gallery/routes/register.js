const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const db = require('../helpers/dbConnection');

router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'register.js router');
    next();
});

router.get('/register', (req, res, next) => {
    return res.render('register', {
        purpose:"Register",
        action: "Create a"
    })
});

router.post('/register', async(req, res, next) => {
    
    try {
        const { username, password } = req.body;

        const records = await db.User.findAll({ where: { username: username } });
        console.log(records);

        if (records.length === 0) {

            bcrypt.hash(password, 10, async (error, hash) => {
                if (error) {
                    console.log(`error with the hash: ${error}`);
                    return res.redirect('register')
                } else {
                    const newUser = await db.User.create({
                        username: username,
                        password: hash
                    });
                    console.log(newUser);
                    return res.redirect('login')
            }
        })


        } else {
            console.log('username taken');
            return res.status(422).render('register'
                // error: {
                //     status: 422,
                //     message: 'Username already taken'
                // }
                // `<h2>Username already taken:${error}</h2>`
            )
        }

    } catch (error) {
        console.log(error);
        res.render('register')
    }

})



module.exports = router;