export {}

const router = require('express').Router();

router.get('/', (req, res, next) => {
  try {
    res.send('Hello world. This is the express server')    
  } catch (error) {
    next()
  }
})

module.exports = router; 