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
    else if (!req.session.user) {
        req.session.destroy();
        console.log('You are not logged in');
        return res.redirect('/login')
    } else {
        req.session.destroy();
        console.log('You are not logged in');
        return res.redirect('/login')
    }
    // next()
}

router.get('/comments', requireAuth, async(req, res, next) => {

    const records = await db.Comment.findAll(        {include: [{model: db.User}]}
        )

    // console.log(JSON.stringify(records, null, 2));

    res.render('comments', {
        records: records,
        userID:req.session.userID
    })
})

router.post('/comments', requireAuth, async (req, res, next) => {
    // try {
    
    console.log(req.body);

    const { category, userID, commentBody } = req.body;

    if (category && userID && commentBody) {
        console.log(category, userID, commentBody);
        try {
            await db.Comment.create({
                userID: userID,
                category: category,
                commentBody: commentBody
            })
            const records = await db.Comment.findAll()
            console.log(records);
            res.redirect('comments')
            // res.send(records)
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

});

router.get('/comments/:category', requireAuth, async (req, res, next) => {
    const cat = req.params.category
    console.log(cat);
    
    const records = await db.Comment.findAll({
        where: { category: cat },
        include: [{ model: db.User }]
    });
    // console.log(records[0].dataValues.User);
    // res.send(records);
    if (records) {
        res.render('comments', {
            records: records,
            userID: req.session.userID
        })
    } else {
        console.log(`Here are the records: ${records}`);
        res.render('emptyComments', {
            userID: req.session.userID        })
    }

});

router.post('/comments/:category', requireAuth, async (req, res, next) => {
    const cat = req.params.category
    console.log(cat);

    const { category, userID, commentBody } = req.body;

    if (category && userID && commentBody) {
        console.log(category, userID, commentBody);
        try {
            await db.Comment.create({
                userID: userID,
                category: category,
                commentBody: commentBody
            })
            const records = await db.Comment.findAll()
            console.log(records);
            res.redirect(`/comments/${category}`)
            // res.send(records)
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('missing userID or comment body');
    }

})

module.exports = router;