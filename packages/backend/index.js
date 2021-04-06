const express = require("express");
const app = express(); 

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'))



app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
