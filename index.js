var express = require('express');
//var bodyParser = require('body-parser');
var cors = require('cors');
//const { table } = require('console');
const path = require('path')

var app = express();
//app.use(bodyParser());
app.use(cors());
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// home page
app.get('/', function(req, res) {
    //var twou = "I am here...";
    //res.render('pages/index', { twou: twou});
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');