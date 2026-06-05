const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../outputs');
const port = Number(process.env.PORT || 8790);

http.createServer((req, res) => {
  const rawPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const requestPath = rawPath === '/' ? '/foodchain_admin_polished.html' : rawPath;
  const file = path.resolve(root, `.${requestPath}`);

  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(port, '127.0.0.1', () => {
  console.log(`Preview available at http://127.0.0.1:${port}/`);
});
