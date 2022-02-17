const fs = require("fs");

// 모든 api는 3가지 형태로 제공된다.
// rename(...,callback(error, data))
// try {renameSync(...)} catch(e){}
// promise.rename().then.catch()

/* try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.log(error);
}
 */

/* fs.rename("./text,txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello"); */

fs.promises
  .rename("./text-new.txt", "./text.txt")
  .then(() => console.log("Done!"))
  .catch(console.error);
