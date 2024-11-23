const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/') {
      const html = await fs.readFile('./index.html', 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    } else if (req.url === '/index.js') {
      const js = await fs.readFile('./index.js', 'utf-8');
      res.setHeader('Content-Type', 'application/javascript');
      res.end(js);
    } else if (req.url === '/style.css') {
      const css = await fs.readFile('./style.css', 'utf-8');
      res.setHeader('Content-Type', 'text/css');
      res.end(css);
    } else {
      res.statusCode = 404;
      res.end('404 Not Found');
    }
  } catch (err) {
    res.statusCode = 500;
    res.end('Internal Server Error');
    console.error(err);
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});