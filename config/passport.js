const axios = require('axios');
const passport = require('passport');
passport.deserializeUser(async (id, done) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/user/get/${id}`);
    const user = response.data;
    done(null, user);
  } catch (err) {
    done(err);
  }
});
