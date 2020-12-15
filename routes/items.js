var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.render('items-list', { title: 'Item List page' });
});

router.get('/add', function(req, res, next) {
  res.render('items-add', { title: 'Item add page' });
});


module.exports = router;
