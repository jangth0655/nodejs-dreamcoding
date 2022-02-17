console.log("code1");
console.time("time");
setTimeout(() => {
  console.timeEnd("time");
  console.log("setTimeout 0");
}, 0);

/* console.log("code2");
setImmediate(() => {
  console.log("setImmediate");
});

console.log("code3");
process.nextTick(() => {
  //우선순위가 제일 높다.
  console.log("nextTick");
}); */
