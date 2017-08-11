var http = require('http');

http.createServer(function (req,res){
res.writeHead(200,{'Content-Type':'text/html'}); 
res.end('Hello Coffee');
console.log('Server started on port 8050...')
}).listen(8050);