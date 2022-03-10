// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

//required module to make calls to a REST API
const axios = require('axios');
const { response } = require('express');
//const ejsLint = require('ejs-lint');
//const resize = require('./resize')




// added 
app.use(bodyParser.urlencoded());

// public
app.use( express.static( "public" ) );


// use res.render to load up an ejs view file


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
// uses a tagline to desplay a smiley face 

// Sharanjit Sembhi
app.get('/', function(_req, res) {
// use res.render to load up an ejs view file
    res.render('pages/index',);
});

app.listen(4375);




console.log('4375 is the CIS port');