const express=require('express');
const productsRouter=express.Router();

const {getproducts, getproducts, delete_product, change_data, add_product }=require("../controllers/productsControllers");
const checkAuth=require('../middleware/checkAuth');

productsRouter.get('/all-products', getproducts);
productsRouter.get('/:product', getproduct);
productsRouter.post('/add-product', checkAuth, add_product);
productsRouter.put('/change-data', checkAuth, change_data);
productsRouter.delete('/delete-product', checkAuth, delete_product);

module.exports=productsRouter;