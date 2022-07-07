// Create server that will listen on port 3000
// Server should contain 3 paths:
// / - main route - witch status code should be 200
// /contact - contact route - status code should be 226
// /[anything else] - 404 route - status code should be 404

const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const url = req.url;

    const getMessage = () => {
      const date = new Date();
      return `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}- Bad request to URL [${
        req.url
      }] - Requested from ${req.socket.remoteAddress}\r\n`;
    };

    if (url === "/") {
      // const firstStatus = (res.statusCode = 200);
      // res.write(`<h1>${firstStatus}: 'OK'</h1>`);
      res.write(`<h1>HOME PAGE</h1>`);
      res.end();
    } else if (url === "/contact") {
      res.writeHead(226, { "Content-Type": "text/html" });
      // const secondStatus = (res.statusCode = 226);
      // res.write(`<h1>${secondStatus}: 'IM Used'</h1>`);
      res.write(`<h1>CONTACT</h1>`);
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      // const thirdStatus = (res.statusCode = 404);
      // res.write(`<h1>${thirdStatus}: 'Not Found'</h1>`);
      res.write(`<h1>ERROR 404 - Page not found</h1>`);
      res.end();

      try {
        const pathResult = path.join(__dirname, "/responses/server.log");

        fs.writeFile(pathResult, getMessage(), { flag: "a" }, (err) => {
          if (err) throw err;
          console.log("Saved");
        });
      } catch (err) {
        console.log("Something went wrong!");
      }
    }
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
