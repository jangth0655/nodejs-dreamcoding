import express from "express";
import "express-async-error";
import * as tweetsController from "../controller/tweet.js";

const router = express.Router();

//GET /tweets
//GET /tweets?username=:username
router.get("/", tweetsController.getTweets);

//GET /tweets/:id
router.get("/:id", tweetsController.getTweet);

//POST /tweets
router.post("/", tweetsController.createTweet);

//DELETE /tweets/:id
router.delete("/:id", tweetsController.deleteTweet);

//PUT /tweets/:id
router.put("/:id", tweetsController.updateTweet);

export default router;
