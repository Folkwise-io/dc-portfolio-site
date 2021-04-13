const router = require('express').Router()

router.use('/echo', require('./echo'))
router.use('/counter', require('./counter'))

//In case route doesnt e
router.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404;
  next(err)
})

module.exports = router;