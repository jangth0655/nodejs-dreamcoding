// Fixed-size chunk of memory
//array of integers, 메모리에 들어있는 데이터 자체를 가리키고 있다.

const buf = Buffer.from("Hi");
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // 초기화 하지 않는다., fast
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

//concat -> 여러 버퍼를 모을 수 있다.

const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
