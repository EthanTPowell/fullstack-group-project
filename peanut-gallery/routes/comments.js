const express = require('express');
const { EmptyResultError } = require('sequelize');
const router = express.Router();

const db = require('../helpers/dbConnection')

router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'index.js router');
    next();
});

function requireAuth(req, res, next) {
    if (req.session.user) next();
    else if (!erq.session.user) {
        req.session.destroy();
        console.log('You are not logged in');
        res.render('login')
    } else {
        req.session.destroy();
        console.log('You are not logged in');
        return res.redirect('login')
    }
}

router.get('/comments', requireAuth, async(req, res, next) => {

    // const records = await db.Comment.findAll()
    // console.log(records);
})

router.post('/comments', async(req, res, next) => {
    // try {
        const { userID, commentBody } = req.body;

    if (userID && commentBody) {
        console.log(userID, commentBody);
        try {
            await db.Comment.create({
                userID: userID,
                commentBody: commentBody
            })
            const records = await db.Comment.findAll()
            res.send(records)
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('missing userID or comment body');
        }
    // }
    // catch(error) {
    //     console.log(error);
    // }

})

module.exports = router;