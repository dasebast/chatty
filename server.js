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
		res.end(JSON.stringify(messages));
	}; //close if
	
	if(req.method === 'POST') {
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});
		req.on('end', function() {
			console.log('got the data')
			var newMessage = JSON.parse(postData);
			newMessage.createdAt = new Date().toISOString();
			messages.push(newMessage);
			// messages.push(JSON.parse(postData));
			res.writeHead(200, {
			'Connection': 'close',
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
			});
			res.end(JSON.stringify(messages));
		});
	};	
	if(req.method === 'OPTIONS') {
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		res.end();
	}
}; //close onRequest

http.createServer(onRequest).listen(port);
	
















	// 	res.writeHead(200, {
	// 		'Connection': 'Close',
	// 		'Content-type': 'application/json',
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST'

	// 	})
	// 	res.end(JSON.stringify(messages));
	// } else if (req.method === 'OPTIONS') {
	// 	res.writeHead(200, {
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	// 		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-type, Accept'
	// 	});
	// }