import express from "express";

const router = express.Router();

router.post("/", handleAIConversation);

export default router;