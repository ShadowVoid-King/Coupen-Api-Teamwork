const express=require('express');
const shoppingCartRouter=express.Router();

const { delete_product, add_product }=require("../controllers/shoppingCartControllers");
const checkAuth=require('../middleware/checkAuth');

shoppingCartRouter.post('/add', checkAuth, add_product);
shoppingCartRouter.delete('/delete', checkAuth, delete_product);

module.exports=shoppingCartRouter;