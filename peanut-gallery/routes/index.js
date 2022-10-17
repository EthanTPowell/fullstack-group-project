const express = require('express');
const router = express.Router();

router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'index.js router');
    next();
});

router.get('/', (req, res, next) => {
    res.render('index')
    // res.send('hit')
});



module.exports = router;