const jwt = require("jsonwebtoken");

const secret = "cnk2E0qH&PpWLInrmxMiM&HZ!LTckPBj";
const token = jwt.sign(
  {
    // payload - 중요한 내용들, 토큰을 담고 싶은 정보들, 너무 크면 네트워크 데이터가 소모된다.
    id: "ellie",
    isAdmin: false,
  },
  // secret key - 우리 서버에서 가지고 있을 중요한 데이터 - 안전한 토큰을 만들어야한다.
  secret,
  { expiresIn: 2 }
);

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(decoded);
  });
}, 3000);
// 한번 변경되면 이미 발행했던 토큰과 다르다.

console.log(token);
