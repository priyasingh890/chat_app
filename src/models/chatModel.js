// models/chatModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createChat = async (message, senderId) => {
  return await prisma.chat.create({
    data: { message, senderId },
  });
};

const getAllChats = async () => {
  return await prisma.chat.findMany({
    include: { sender: true },
    orderBy: { timestamp: 'asc' },
  });
};

module.exports = { createChat, getAllChats };
