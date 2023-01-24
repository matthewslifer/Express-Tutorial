const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    //Home page
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    //About page
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    }
    //404 error
    else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>page not found</h1>');
        res.end();
    }
})

server.listen(3000)

// .method indicates what action a user is trying to do
