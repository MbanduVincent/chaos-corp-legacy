const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3000;

// The callback function handles every incoming request (req) and response (res)
const server = http.createServer((req, res) => {
  // Set the response status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the final response body and close the connection
  res.end('Hello Node.js Server!\n');
});

// Start listening for connections
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
