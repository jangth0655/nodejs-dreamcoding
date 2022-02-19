const fs = require("fs");

const data = [];
// event-base
const readStream = fs
  .createReadStream("./file.txt", {
    //highWaterMark: 16, //64kb
    encoding: "utf-8",
  }) // 데이터가 발생할때 마다 on
  .on("data", (chunk) => {
    data.push(chunk);
    console.count(chunk);
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });
