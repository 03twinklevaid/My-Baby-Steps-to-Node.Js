var http = require('http');
var url = require('url');
var fs = require('fs');
var data = 'abc';
http.createServer(function(req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	// console.log('q.pathname:', q.pathname) It will print /;
	// console.log('filename:', filename) It will print ./;
	// console.log('data:', data);
	fs.readFile(filename, function(err,data){
		// console.log('Inside Function');
		// console.log('data:', data);
		if(err) {
			res.writeHead(404, {'content-type':'text/html'});
			return res.end("404 Not found");
		}
		res.writeHead(200, {'content-type' : 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);