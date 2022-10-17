const express = require('express');
const router = express.Router();

const db = require('../helpers/dbConnection')

router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'index.js router');
    next();
});

router.get('/comments', async(req, res, next) => {
    res.render("comments")
    // const records = await db.Comment.findAll()
    // console.log(records);
})

router.post('/comments', async(req, res, next) => {
    // try {
        const { username, commentBody } = req.body;

    if (username && commentBody) {
        console.log(username, commentBody);
        try {
            // await db.Comment.create({
            //     username: username,
            //     commentBody: commentBody
            // })
            const records = await db.Comment.findAll()
            res.send(records)
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('missing username or comment body');
        }
    // }
    // catch(error) {
    //     console.log(error);
    // }

})

module.exports = router;