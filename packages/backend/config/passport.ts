/* Passport / GitHub Strategy Configuration */
export {}

const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

require('dotenv').config()

// GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET are in your local .env file
// callbackURL is where user is directed if GitHub authentication is successful
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:5000/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {

        // To keep it simple for now, the user's GitHub profile is returned to represent the logged-in user
        // TODO - associate GitHub account with user record in db and return user
        return done(null, profile);
    }
));

// Setup Passport sessions to support persistent login sessions
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

module.exports = passport;