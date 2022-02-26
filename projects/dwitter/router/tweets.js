import express from "express";
import "express-async-error";
import { body } from "express-validator";
import * as tweetsController from "../controller/tweet.js";
import { isAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validateTweet = [
  [
    body("text")
      .trim()
      .isLength({ min: 3 })
      .withMessage("text should be at least 3 characters"),
    validate,
  ],
];

//GET /tweets
//GET /tweets?username=:username
router.get("/", tweetsController.getTweets);

//GET /tweets/:id
router.get("/:id", tweetsController.getTweet);

//POST /tweets
router.post("/", isAuth, validateTweet, tweetsController.createTweet);

//PUT /tweets/:id
router.put("/:id", isAuth, validateTweet, tweetsController.updateTweet);

//DELETE /tweets/:id
router.delete("/:id", isAuth, tweetsController.deleteTweet);

export default router;
