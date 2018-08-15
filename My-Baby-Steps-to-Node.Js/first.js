var http = require('http'); //to include the http module ,use the require() method
var dt = require('./myfirstmodule');
var url = require('url');
var adrs = 'http://localhost:8080/summer.html?year=2018&month=august';
//create a server object
http.createServer(function (req,res) {
	//The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
	res.writeHead(200, {'content-type' : 'text/html'}); //If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
	res.write("Currently date and time are:" + dt.myDateTime()); //write response to the client
	res.write(req.url);
	var q = url.parse(adrs, true).query; //Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
	var txt = q.year + " " + q.month;
	res.end(txt); //end the response
}).listen(8080); //server object listens to port 8080
//The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.