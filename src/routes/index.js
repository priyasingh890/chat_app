const express = require("express");
const userRoutes = require("./userRoutes");
const chatRoutes = require("./chatRoutes")
const router = express.Router();

// Use route files
router.use("/v1/users", userRoutes);
router.use("/v1/auth", chatRoutes);

module.exports = router;