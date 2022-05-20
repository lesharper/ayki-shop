const Router = require('express')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const productRouter = require('./productRouter')

const router = new Router()

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)

module.exports = router
