const http = require('http');
const server = http.createServer(
  (req, res) => {
    // 响应头 响应体
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p style="color: red;">Hello World!<p>');
});

server.listen(3000);