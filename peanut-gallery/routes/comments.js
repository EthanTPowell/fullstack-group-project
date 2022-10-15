const express = require('express');
const router = express.Router();

router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'index.js router');
    next();
});

router.get('/comments', (req, res, next) => {
    res.render("../views/comments.ejs")
})

module.exports = router;