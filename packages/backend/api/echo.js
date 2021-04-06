const router = require('express').Router();

router.post('*', (req, res, next) => {
  res.send(req.body.equation || 'hello world. this is the express server')
})

module.exports = router; 