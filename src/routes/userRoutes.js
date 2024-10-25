// routes/userRoutes.js
const express = require('express');
const { register, login } = require('../controllers/userController');
const  { userAuthSchemaValidate }= require("../midleware/validates")
const router = express.Router();

router.post('/register',userAuthSchemaValidate, register);
router.post('/login', userAuthSchemaValidate, login);

module.exports = router;
