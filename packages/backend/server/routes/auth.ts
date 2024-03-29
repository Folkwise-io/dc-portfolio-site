export {}

const router = require('express').Router();
const passport = require('../../config/passport');

// Route: /auth/github
router.get('/github', 
    passport.authenticate('github', { scope: [ 'user:email' ] })
);

module.exports = router; 
