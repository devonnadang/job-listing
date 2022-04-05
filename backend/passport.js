const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = ""
const GOOGLE_CLIENT_SECRET = ""

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);
    
  }
  ));

  /*            Saved for implementing Database 
        function(accessToken, refreshToken, profile, cb) {
            User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
            });
        }
*/

passport.serializeUser((user,done) => {
    done(null, user);
});

passport.deserializeUser((user,done) => {
    done(null, user);
});