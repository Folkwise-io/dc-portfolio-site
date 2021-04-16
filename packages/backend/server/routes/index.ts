export {}

const router = require('express').Router()

router.use('/echo', require('./echo'))
router.use('/counter', require('./counter'))

interface Error {
  status?: number;
}
//In case route doesnt e
router.use((req, res, next) => {
  const err = new Error('Not found') as Error
  err.status = 404;
  next(err)
})

module.exports = router;