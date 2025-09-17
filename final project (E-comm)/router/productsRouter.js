
const { GetAllProducts, GetProductById, AddProduct, EditProduct, DeleteProduct } = require('../controllers/products')
const { CheckAuth } = require('../middelware/checkAuth')

const router=require('express').Router()

router.get('/all-products',GetAllProducts)
router.get('/:product',GetProductById)

router.use(CheckAuth)
router.post('/add-product',AddProduct)
router.put('/change-data',EditProduct)
router.delete('/delete-product',DeleteProduct)



module.exports=router
