// routes/chatRoute.
const express = require('express');
const { sendMessage, getMessages } = require('../controllers/chatController');
const router = express.Router();
const authenticateToken = require("../midleware/authrization.js")
router.post('/send',authenticateToken, sendMessage);
router.get('/messages', authenticateToken, getMessages);

module.exports = router;