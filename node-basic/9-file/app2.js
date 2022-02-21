const fs = require("fs").promises;

//read a file 비동기적으로
fs.readFile("./text.txt", "utf-8")
  .then((data) => console.log(data))
  .catch(console.error);

//writing a file
fs.writeFile("./file.txt", "Hello, Dream Corders :)") //
  .catch(console.error);

fs.appendFile("./file.txt", "Yo, Dream Corders :)") //
  .then(() => {
    fs.copyFile("./file.txt", "./file2.txt") //
      .catch(console.error);
  })
  .catch(console.error);

//folder
fs.mkdir("sub-folder") //
  .catch(console.error);

fs.readdir("./").then(console.log).catch(console.error);
