// Create server that will listen on port 3000
// Server should contain 3 paths:
// / - main route - witch status code should be 200
// /contact - contact route - status code should be 226
// /[anything else] - 404 route - status code should be 404

const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const url = req.url;

    if (url === "/") {
      const firstStatus = (res.statusCode = 200);
      res.write(`<h1>${firstStatus}: 'OK'</h1>`);
      res.end();
    } else if (url === "/contact") {
      const secondStatus = (res.statusCode = 226);
      res.write(`<h1>${secondStatus}: 'IM Used'</h1>`);
      res.end();
    } else {
      const thirdStatus = (res.statusCode = 404);
      res.write(`<h1>${thirdStatus}: 'Not Found'</h1>`);
      res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
