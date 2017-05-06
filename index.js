var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'html');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	res.sendFile(__dirname +'/views/index.html');
	explorer() ; 
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);

	});

function explorer(){
 var linkArray = document.getElementsByTagName("a");
	console.log(linkArray) ;
}




