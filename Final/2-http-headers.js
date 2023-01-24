const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Home Page</h2>');
    res.end();
})

server.listen(3000)

// Status Codes
// HTTP Response Status Codes MDN Web Docs
// 100-199 Informational Responses
// 200-299 Successful responses
// 300-399 Redirects
// 400-499 Client Errors
// 500-599 Server Errors
// developer.mozilla.org/en-US/docs/Web/HTTP/Status

// MIME Types (Media types being sent back too client)
// Also on MDN Web Docs
