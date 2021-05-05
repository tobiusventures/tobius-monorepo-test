const fs = require('fs');
const http = require('http');
const html = fs.readFileSync('index.html', 'utf8');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(html);
  res.end();
}).listen(process.env.PORT || 5000);
