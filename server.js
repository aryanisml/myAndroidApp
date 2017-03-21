/* ========================================================== 
External Modules/Packages Required
============================================================ */
var express = require('express');
var http = require('http');

/* ========================================================== 
Create a new application with Express
============================================================ */
var app = express();

/* ========================================================== 
serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname)); 

/* ========================================================== 
Use Middleware
============================================================ */
//app.use(bodyParser.urlencoded({
//  extended: true
//}));

//app.use(bodyParser.json({
 // extended: true
//}));

//app.use(cors());
//app.use(logger('dev'));

/* ========================================================== 
Port the server will listen on
============================================================ */
app.set('port', 3000);


//var data = [
  //{"firstName": "Jeff", "lastname": "Winger"},
  //{"firstName": "Troy", "lastname": "Barnes"},
  //{"firstName": "Britta", "lastname": "Perry"},
  //{"firstName": "Abed", "lastname": "Nadir"}
//];

//app.get('/users', function(req, res) {
  //  res.send(data);
//});

//app.post('/users', function(req, res) {
  //  res.send(req.body);
//});

/* ========================================================== 
Bind to a port and listen for connections on it 
============================================================ */
var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
    console.log("========LISTENING On Port 3000=========")
});
