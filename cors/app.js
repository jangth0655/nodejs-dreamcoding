import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const corsOption = {
  // 다른 도메인에서(프론트엔드 주소) 사용한다면 데이터를 보여줄 수 없다.
  origin: ["http://127.0.0.1:5500"],
  optionsSuccessStatus: 200, // http 옵션 메소드에 의해서 자동으로 200응답
  credentials: true, // header에 토큰이나 사용자의 정보를 추가한다면
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan("short"));

// 우리가 특정한 도메인에서(우리가 배포한 클라이언트에서만 데이터를 보여주는것이 좋다.)만
// cors policy를 허용
app.use(cors(corsOption));
app.use(helmet()); // 공통적으로 보안에 필요한 헤더를 추가해준다.

// 브라우저에서만 가지고 있는 CORS 정책이 있다.
// 클라이언트와 서버가 동일한 IP주소에서(동일한 서버)동작하고 있다면 리소스를 별다른 제약없이 주고 받을 수 있지만 만약 다른 IP주소에 있다면 원칙적으로는 어떤 데이터도 주고받을 수 잆다.
// 그래서 클라이언트와 서버가 다른 도메인에 있을 때 데이터를 주고 받으려면
// 서버에서 클라이언트에게 response를 할때 <Access-Control-Allow-Origin>을 헤더에 추가해줘야 한다.
// 그러면 클라이언트는 서버가 허용해준것을 알고 서버에게 받은 데이터를 표기할 수 있다.

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Welcome");
});

app.listen(8080);
