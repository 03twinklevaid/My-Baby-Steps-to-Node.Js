var express = require('express');
var app = express();
 // app.get('/:id', function(req, res){
 // 	res.send('The id you specified is:' + req.params.id);
 // });

// we can also use regex to restrict URL parameter matching
 app.get('/twinkle/:name/:id', function(req, res){
 	res.send('The url you have specified is' + req.params.name + req.params.id);
 });

 app.listen(3000);