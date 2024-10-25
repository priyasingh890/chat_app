const { createUser, findUserByUsername } = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.summary = 'Ragistration'
      #swagger.description = 'This route logs in the admin and generates a JWT token.'
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'username and Password',
        required: true,
        schema: { $ref: "#/definitions/UserSchema" }
      }
    */
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await createUser(username, hashedPassword);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed: ' + error.message });
  }
};


const login = async (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.summary = 'login'
      #swagger.description = 'This route logs in the admin and generates a JWT token.'
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'username and Password',
        required: true,
        schema: { $ref: "#/definitions/UserSchema" }
      }
    */
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'Username is not correct. Please enter the correct username.' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Password is not correct. Please enter the correct password.' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET);
    console.log(token, "login token")
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).json({ error: 'Login failed: ' + error.message });
  }
};

module.exports = { register, login };




