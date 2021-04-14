const router = require('express').Router();

router.get('/', (req, res, next) => {
  try {
    res.send('Hello world. This is the express server')    
  } catch (error) {
    next()
  }
})

router.post('/', (req, res, next) => {
  try {
    res.send(req.body)    
  } catch (error) {
    next()
  }
})

module.exports = router; 