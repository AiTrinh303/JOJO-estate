// controllers/aiController.js
import axios from "axios";
const openaiKey = process.env.OPENAI_KEY;

const handleAIConversation = async (req, res) => {
  const { messages } = req.body;

  // Validate input
  if (!Array.isArray(messages) || !messages.length) {
    return res.status(400).json({
      success: false,
      message: "Messages are required",
    });
  }

  // Construct the prompt
  const requiredPrompt =
    "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n" +
    messages
      .map((item) => `${item.from === "ai" ? "AI: " : "Human: "}${item.text}`)
      .join("\n") +
    "\nAI: ";

  const reqUrl = "https://api.openai.com/v1/completions";
  const reqBody = {
    model: "text-davinci-003",
    prompt: requiredPrompt,
    max_tokens: 3000,
    temperature: 0.6,
  };

  try {
    // Make request to OpenAI API
    const response = await axios.post(reqUrl, reqBody, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${openaiKey}`,
      },
    });

    const data = response.data;
    const answer = Array.isArray(data.choices) ? data.choices[0]?.text : "";

    // Send the AI response
    res.status(200).json({
      success: true,
      data: answer.trim(),
    });
  } catch (err) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

module.exports = { handleAIConversation };
