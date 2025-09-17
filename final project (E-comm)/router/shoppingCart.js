
const { AddToCart, DeleteFromCart } = require('../controllers/cart')
const { CheckAuth } = require('../middelware/checkAuth')

const router=require('express').Router()


router.use(CheckAuth)
router.post('/add',AddToCart)
router.delete('/delete',DeleteFromCart)



module.exports=router
