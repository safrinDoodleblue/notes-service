// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// module.exports = function ensureAuth(req, res, next) {
//   const token = req.session?.token;
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized: No token found' });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid or expired token' });
//   }
// };



























// module.exports = function ensureAuth(req, res, next) {
//   console.log("Authenticated?", req.isAuthenticated());
//   console.log("Session:", req.session);
//   console.log("User:", req.user);

//   if (req.isAuthenticated()) return next();
//   return res.status(401).json({ message: 'Unauthorized' });
// };

//req.isAuthenticated()
//This method is provided by Passport.js.

//It returns true if the user is logged in, otherwise false.