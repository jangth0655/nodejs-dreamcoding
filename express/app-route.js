import express from "express";
import postRouter from "./router/post.js";
import useRouter from "./router/user.js";

const app = express();

app.use(express.json());
// route 사용 app에 어떤 경로에 route를 사용할 것인지

// 우리가 처리하는 경로에는 posts가 있구나, 그에 관련된 아이들은 postRouter에 있구나
// 우리 서버에는 큰 도메인이 post와 user가 있구나

// 최종, 상위에 있는 root를 설정한 다음에 라우터를 연결하면 해당 라우터 파일에서는 루트를 생략 가능
app.use("/posts", postRouter);
app.use("/users", useRouter);

app.listen(8080);
