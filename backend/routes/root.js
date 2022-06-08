const Router = require('express')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const subcategoryRouter = require('./subcategoryRouter')
const productRouter = require('./productRouter')
const photoRouter = require('./photoRouter')
const sizetRouter = require('./sizeRouter')

const router = new Router()

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/subcategory', subcategoryRouter)
router.use('/size', sizetRouter)
router.use('/product', productRouter)
router.use('/photo', photoRouter)

module.exports = router
