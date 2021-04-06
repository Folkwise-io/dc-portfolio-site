const express = require("express");
const app = express(); 

// console.log("Hello World!!!!");



app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'))
// app.get('./', function(req,res) {
//   res.send('hello world') 
// });


app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
