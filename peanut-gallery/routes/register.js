const express = require('express');
const router = express.Router();

const db = require('../helpers/dbConnection');

router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'register.js router');
    next();
});

router.get('/register', (req, res, next) => {
    return res.render('./register.js')
});

router.post('/register', async(req, res, next) => {
    
    try {
        const { username, password } = req.body;

        const records = await db.User.findAll({ where: { username: username } });
        console.log(records);

        if (records.length === 0) {
            db.User.create({
                username: username,
                password: password
            })
            return res.redirect('login')
        } else {
            console.log('username taken');
            return res.status(422).send({
                error: {
                    status: 422,
                    message: 'Username already taken'
                }
            })
        }

    } catch (error) {
        console.log(error);
        res.render('register')
    }

})



module.exports = router;