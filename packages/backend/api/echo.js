const router = require('express').Router();

router.use('*', (req, res, next) => {
  res.send(req.body.equation || 'hello world. this is our portfolio maker app')
})

module.exports = router; 