const http = require('http');
var fs = require('fs');

const server = http.createServer((request,response) =>{
    let url = request.url;

    if(request.url === '/'){
        url = '/index.html';
    }
    if(request.url === '/favicon.ico'){
        return response.writeHead(404);
    }

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

server.listen(8080, () => {
    console.log('Server is http://localhost:8080/');
});