  

var Twitter = require('twitter-node-client').Twitter;


//importing Twitter JS Client dependancy
// module.exports = require('../node_modules/twitter-js-client/lib/Twitter.js');

//Callback functions
var error = function(err, response, body) {
  console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function(data) {
  console.log('Data [%s]', data);
};


// VARIBALES
var express = require('express');
var OAuth2 = require('oauth').OAuth2;
var https = require('https');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

// TWITTER AUTHENICATION
var config = {
  "consumerKey": "1rwxopHjn7gi7MP72xoAXtiIl",
  "consumerSecret": "GKplXtuyYXl1jl6sYwxOD8SeXz2n5mW2nRnovVwqae4DlXV2mW",
  "accessToken": "707759691963564032-iHE4VD7XSING2mggRcfiJ8aRpKhfBaa",
  "accessTokenSecret": "XI6qykHaliyZCGI4kk1I23FuU5ILqKhljKHuEonblPNu6",
};
var twitter = new Twitter(config);

// SETTING PORT //

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server running on port ' + port);
});
//********************************//********************************//
app.use(express.static('js'));
app.use(express.static('public'));
app.use(express.static('/public/css'));
app.use(express.static('/public/css/styles.css'));
app.use("/public/css", express.static(__dirname + '/public/css/styles.css'));



//creating a router for sending static index.html
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public', 'index.html'));
});



//getting /tweets will respond with our json data
router.get('/tweets', function(req, res) {

  twitter.getSearch({
    'q': 'happy hour portland',
    'count': 10
  }, function(x, err) {

    // this is our error callback function for our search:
    // I really have no idea what these give back so I used x, err as placeholder params
    // TODO: change this to resemble what we get back.

    //console.log('data', x);
    console.log('error!', err);
  }, function(x, err) {
    console.log('twitter.getSearch ran successfully!');
    res.send(x)

  // uncomment this to console.log the data
  //  console.log('data', x);
    console.log('error!', err);
  });
})
//APP CONFIG
app.use('/', router);
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));



var oauth2 = new OAuth2(

  config.consumerKey,

  config.consumerSecret,

  'https://api.twitter.com/',

  null,

  'oauth2/token',

  null);


/*
 * Lines 60 - 65 were a replacement for lines 67 - 96
 * There isn't any error handling but this seemed to work
 * TODO: atleast a console.log(e) or handle the error event (e);
 */
oauth2.getOAuthAccessToken(
  '', {
    'grant_type': 'client_credentials'
  },
  function(e, access_token, refresh_token, results) {
    console.log('bearer: ', access_token);
  });


