import express from "express";

const app = express();

app
  .route("/posts")
  .get((req, res, next) => {
    res.status(201).send("GET:/posts");
  })
  .post((req, res, next) => {
    res.status(201).send("POST");
  });

app.listen(8080);
