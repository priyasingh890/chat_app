
const jwt = require('jsonwebtoken');
/**
 * Middleware to authenticate JWT tokens.
 * If valid, attaches the decoded user information to the request object.
 */
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Access token is missing' });
  }
  
  // Check if token is in "Bearer <token>" format
  const token = authHeader.split(' ')[1];
  console.log(token ,"autho")
  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  // Now verify the token (JWT verification)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};



module.exports = authenticateToken;