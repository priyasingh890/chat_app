// models/userModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (username, password) => {
  return await prisma.user.create({
    data: { username, password },
  });
};

const findUserByUsername = async (username) => {
  return await prisma.user.findUnique({
    where: { username },
  });
};

module.exports = { createUser, findUserByUsername };