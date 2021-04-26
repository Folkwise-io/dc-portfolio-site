const express = require('express')
const session = require('express-session')
const morgan = require('morgan')
const passport = require('passport')

const app = express(); 

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* Configure Passport User Sessions */
// secret - Secret used to sign the session ID cookie
// resave - Resaves session variables if nothing has changed
// saveUninitialized - Forces a session that is "uninitialized" to be saved to the store, i.e., saves an empty value if there is no value
app.use(session({ 
  secret: "keyboard cat", // Can be changed later
  resave: true, 
  saveUninitialized: true 
}));

/* Initialize Passport */
app.use(passport.initialize())

// Use passport.session() middleware to support persistent user login sessions
app.use(passport.session())

app.use('/', require('./routes'))

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

module.exports = app 