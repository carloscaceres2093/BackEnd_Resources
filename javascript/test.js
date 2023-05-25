const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello This is BackEnd Course! and I am Carlos\n");
});
server.listen(port, () => {
	console.log(`Listening Port ${port}`);
});
