import express from "express";
import { handleAIConversation } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/", handleAIConversation);

export default router;