var express = require('express');
var router = express.Router();

const itemlist = [
  { 'id':1, 'title': 'Heading 1', 'description': 'This is a description of the work'},
  { 'id':2, 'title': 'Another Heading', 'description': 'Some more details on this item'},
  { 'id':3, 'title': 'SIT722', 'description': 'This best unit ever'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', subheading: 'Slow Train to San Fernando', items: itemlist });
  
});

module.exports = router;
