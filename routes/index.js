var express = require('express');
var router = express.Router();

const itemlist = [
  { 'id':1, 'title': 'Heading 1', 'description': 'This is a description of the work'},
  { 'id':2, 'title': 'Another Heading', 'description': 'Some more details on this item'},
  { 'id':3, 'title': 'SIT722', 'description': 'This best unit ever'},
];

const panellist = [
  { 'id':1, 'title': 'Microservice', 'description': 'This is the UI for Microserver01'},
  { 'id':2, 'title': 'Function', 'description': 'Separation of the Monolith'},
  { 'id':3, 'title': 'Status', 'description': 'Preliminary Mockup'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { student: 'pbarnes',title: 'SIT722 Express', subheading: 'Microservice, trains to San Fernando', items: itemlist,
        panel01: panellist, url: 'href=https://week01-g8b3.onrender.com/', link: 'Visit Week01!'
        });
  
});

module.exports = router;
