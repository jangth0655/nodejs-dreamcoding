const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "Ellie";
const course = [
  { name: "HTML" },
  { name: "css" },
  { name: "javascript" },
  { name: "node" },
];
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
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
