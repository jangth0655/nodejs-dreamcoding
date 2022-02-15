// nodejs는 컴퓨터 위에서 동작하기때문에 파일시스템에 접근하기 좋다.
const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".ts"));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse 전체 경로를 하나하나 분리할 수 있디.
const parsed = path.parse(__filename);
console.log(parsed);
const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname));
console.log("isAbsolute?", path.isAbsolute("../"));

//normalize
console.log(path.normalize("./folder//////asdf//////sub"));

//join
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image")); // 자동으로 path를 만들어준다.
