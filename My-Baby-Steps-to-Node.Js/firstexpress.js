//It imports Express in our file, we have access to it through the variable Express. We use it to create an application and assign it to var app.
var express = require('express');
var app = express();
var routes = require('./expressroute.js')
//app.get(route, callback) :callback->An asynchronous function that is called when the server starts listening for requests.
//This function tells what to do when a get request at the given route is called.

//app.method(path, handler)->This METHOD can be applied to any one of the HTTP verbs – get, set, put, delete.
//Handler:It is basically a callback function.

// app.get('/twinkle', function(req, res){
// 	res.send("Hello ExpressJS!!!"); //This function takes an object as input and it sends this to the requesting client. Here we are sending the string "Hello World!".
// });

//To test POST REQUEST, open up your terminal and use CURL: curl -X POST "http://localhost:3000/twinkle"
// app.post('/twinkle', function(req,res){
// 	res.send("You have used Post HTTP method at '/twinkle' !\n")
// })

// app.all('/twinkle', function(req,res){
// 	res.send("HTTP method doesn't have any effect on this route!")
// })

//The app.use function call on route '/routes' attaches the routes router with this route
app.use('/routes', routes);

//app.listen: This function binds and listens for connections on the specified host and port. Port is the only required parameter here.
app.listen(3000); //3000: A port number on which the server should accept incoming requests