import express from "express";

const app = express();

// route 사용 app에 어떤 경로에 route를 사용할 것인지
app
  .route("/posts")
  .get((req, res, next) => {
    res.status(201).send("GET : /posts");
  })
  .post((req, res) => {
    res.status(201).send("POST : /posts");
  });

app
  .route("/posts/:id")
  .put((req, res) => {
    res.status(201).send("PUT : /posts/:id");
  })
  .delete((req, res) => {
    res.status(201).send("PUT : /posts/:id");
  });
app.listen(8080);
