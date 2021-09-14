const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy(((username, password, done) => {
  const db_username = 'tojibon@gmail.com';
  const db_password = 'tojibon@gmail';

  console.log('Login form posted data: ');
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);

  if (username === db_username && password === db_password) {
    return done(null, { username });
  }
  // return done(null, false);
  console.log(db_username);
  return done(null, { username: db_username });
})));

// FOR SESSION
passport.serializeUser((user, done) => {
  done(null, user.username);
});
passport.deserializeUser((username, done) => {
  done(null, { username });
});

module.exports = passport;
