const jwt = require('jsonwebtoken');
const redis = require('../redisClient');
require('dotenv').config();


module.exports = async function ensureAuth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        const redisSession = await redis.get(`token:${token}`);
        console.log(redisSession);

        if (!redisSession) {
            return res.status(401).json({ message: "Unauthorized: Token revoked or expired" });
        }
        const refreshExists = await redis.get(`refresh:${decoded.id}`);
        if (!refreshExists) {
            return res.status(401).json({ message: "Unauthorized: Refresh token no longer valid" });
        }
        next();
    } catch (error) {
        console.log('Auth error:', error);
        return res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
    }

};



























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