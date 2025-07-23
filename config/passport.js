const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
require('dotenv').config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    console.log('JWT payload:', jwt_payload);
    return done(null,{id:jwt_payload.id});
  })
);

module.exports = passport;

















































// const axios = require('axios');
// const passport = require('passport');
// passport.deserializeUser(async (id, done) => {
//   try {
//     const response = await axios.get(`http://localhost:3000/api/user/get/${id}`);
//     const user = response.data;
//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });
