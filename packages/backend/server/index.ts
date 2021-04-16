const express = require("express");

const morgan = require('morgan')
// const cors = require('cors')

// const corsOptions ={
//   origin:'http://localhost:4000', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }


const app = express(); 
// app.use(cors(corsOptions))
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