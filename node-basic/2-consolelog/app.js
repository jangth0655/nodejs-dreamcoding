// 서버에서 발생하는 이벤트 상태에따라서
console.log("logggg");
console.clear();

//log level
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

//assert
console.assert(2 === "3", "not same!");
console.assert(2 === 2, "same!");

const student = { name: "ellie", age: 20, company: { name: "ac" } };
console.table(student);
console.dir(student, { showHidden: true, colorS: false, depth: 1 });
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");
console.trace(); //  어디에서 호출됬는지 찾아볼 때
