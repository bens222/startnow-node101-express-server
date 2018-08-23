// import files and packages up here
var data = require( './data.json')
var express = require('express')
var morgan = require('morgan')

// create your express server below
var app = express();


//Logging each Request
app.use(morgan('dev'));

// add your routes and middleware below
app.use(express.static("client")); // This grabs the client folder so I can acces the code for my top spots


 //Route to access top spots page
app.get('/', function(req, res) {
    res.send('index.html')
});

 //Route to access data
app.get('/data', function(req, res) {
    res.send(data);
});

// finally export the express application
module.exports = app;