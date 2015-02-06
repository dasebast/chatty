var http = require('http');
var port = 8999;

var messages = ["hello"];

var onRequest = function(req, res) {
	if(req.method === 'GET') {
		res.writeHead(200, {
			'Connection': 'close',
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		res.end(JSON.stringify({message: messages}));
	}; //close if
	
	if(req.method === 'POST') {
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});
		req.on('end', function() {
			messages.push(JSON.parse(postData));
			res.end(postData);
		});
	};

}; //close onRequest

http.createServer(onRequest).listen(port);