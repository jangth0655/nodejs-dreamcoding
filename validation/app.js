import express from "express";
import { body, check, param, validationResult } from "express-validator";

const app = express();

app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array() });
};

app.post(
  "/users",
  [
    body("name")
      .trim() // 공백을 제거하다.
      .notEmpty()
      .withMessage("이름을 입력해주세요")
      .isLength({ min: 2 })
      .withMessage("이름은 두글자 이상"),
    body("age").notEmpty().isInt().withMessage("숫자를 입력해"),
    body("email").isEmail().withMessage("이메일 입력해주세요").normalizeEmail(),
    body("job.name").notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  [check("email").isEmail().withMessage("옳바르지 않습니다."), validate],
  (req, res, next) => {
    res.send("mail");
  }
);

app.listen(8080);
