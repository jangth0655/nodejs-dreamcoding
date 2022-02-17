const fs = require("fs");
//piping은 여러가지 묶어서 사용할 수 있다. = 압축할 수 있는 모듈
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", (data) => {
  console.log("done");
});

const http = require("http");
