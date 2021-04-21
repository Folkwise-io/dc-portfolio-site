const express = require("express");

const morgan = require('morgan')

const app = express(); 

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes'))

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

module.exports = app 