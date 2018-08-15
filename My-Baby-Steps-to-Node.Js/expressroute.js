// Defining routes like in firstexpress.js is very tedious to maintain. To separate the routes from our main firstexpress.js file, we will use Express.Router. we created a new file called expressroute.js.
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.send("GET route on things.")
})

router.post('/', function(req,res){
	res.send("GET route on things.")
})

//we will export this router to use in firstexpress.js

module.exports = router;