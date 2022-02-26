import express from "express";
import postRouter from "./router/post.js";
import useRouter from "./router/user.js";

const app = express();

app.use(express.json()); //REST API request의 body를 파싱할 때 사용(읽어올 수 있다.)

// body를 자동으로 파싱해준다. - HTML Form 요소에서 submit을 하게되면 request가 자동으로 발생하는데, 그때 전달된 데이터를 body안으로 자동으로 파싱해준다.
app.use(express.urlencoded({ extended: false }));

//public안에 있는 아이들을 사용자가 읽어갈 수 있도록 만들꺼야
//파일의 직접적인 제공을 시작할 수 있다.
app.use(express.static("public"));

// route 사용 app에 어떤 경로에 route를 사용할 것인지

// 우리가 처리하는 경로에는 posts가 있구나, 그에 관련된 아이들은 postRouter에 있구나
// 우리 서버에는 큰 도메인이 post와 user가 있구나

// 최종, 상위에 있는 root를 설정한 다음에 라우터를 연결하면 해당 라우터 파일에서는 루트를 생략 가능
app.use("/posts", postRouter);
app.use("/users", useRouter);

app.listen(8080);
