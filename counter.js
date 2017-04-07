var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
	console.log('New connection, go gators!');
	userCount++;

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello!\n');
	response.write('There are ' + userCount + ' vistors!\n');
	response.end();
}).listen(8080);

console.log('Server started...');