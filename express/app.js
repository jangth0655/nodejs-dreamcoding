import express from "express";
const app = express();

//다시 또 같은 콜백함수에서 send를 한번만 사용해야한다. -> 그래서 return사용

// 딱 '/api' 해당 경로에 대해서만 http method가 구분없이 가능하고
app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

// '/sky' 해당 경로를 포함한 어떠한 경로에 대해서도 가능 '/api/asdf' 가능하다.
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

//우리가 등록한 콜백함수는 누가 먼저 등록했는지 순서가 중요하다.
app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    res.send("hello");
  },
  (req, res, next) => {
    console.log("first2");
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  res.status(404).send("Not available @_@");
});
// 중간중간에 에러가 발생하더라도 마지막 에러 핸들링이 처리한다.
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});
app.listen(8080);

//IP -> 우리 서버가 네트워크 상 주소(어디있는지 알려준다면)
//Port -> 여러게의 포트가 있다. - 그 포트 중 우리가 관심있는 애플리케이션을 듣고 접속할 수 있다.
