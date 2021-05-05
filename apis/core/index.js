const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ foo: 'World' }));
  res.end();
}).listen(process.env.PORT || 5000);
