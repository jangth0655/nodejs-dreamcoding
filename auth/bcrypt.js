const bcrypt = require("bcrypt");

const password = "abcd1234";

const hashed = bcrypt.hashSync(password, 10);

console.log(`password : ${password}, hashed : ${hashed} `);
//암호화에 관련된 것은 cpu를 사용한다.
const result = bcrypt.compareSync("abcd123", hashed);
console.log(result); // false
