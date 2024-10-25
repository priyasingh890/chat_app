const {
  successResponse,
  errorResponse
} = require("../utils/responseHandler.js");

const { createChat, getAllChats } = require('../models/chatModel');

const sendMessage = async (req, res) => {
  const { message, senderId } = req.body;
  try {
    const chat = await createChat(message, senderId);
    return successResponse(res, chat, "Chat created successfully", 201); // Changed status code to 201 for resource creation
  } catch (error) {
    return errorResponse(res, "Failed to create chat", 500, error.message); // Changed status code to 500 for server errors
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await getAllChats();
    return successResponse(res, messages, "Chats retrieved successfully", 200); // Changed message for clarity
  } catch (error) {
    return errorResponse(res, "Failed to get chats", 500, error.message); // Changed status code to 500 for server errors
  }
};

module.exports = { sendMessage, getMessages };


