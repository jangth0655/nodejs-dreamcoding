const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    console.log(url);
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/course") {
    console.log(url);
    fs.createReadStream("./html/course.html").pipe(res);
  } else {
    console.log(url);
    fs.createReadStream("./html/not-found.html").pipe(res);
  }
});

server.listen(4000);
