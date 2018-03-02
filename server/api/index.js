const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/events', require('./events'));
router.use('/venues', require('./venues'))
router.use('/orders', require('./orders'))
router.use('/cart', require('./cart'))
// router.use('/orderlines', require('./orderlines'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
