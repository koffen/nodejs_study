var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Tupe':'text/plain'});
	res.end('helloWrld\n');
	}).listen(1337,'127.0.0.1');
console.log('server running at http://127.0.0.1:1337/');
