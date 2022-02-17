//const processModule = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid); //프로세스 부모의 아이디
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);
process.nextTick(() => {
  // taskQueue 제일 앞부분에 넣어준다.
  console.log("nextTick");
});
