const cartsModel=require("../models/carts");
const productsModel=require("../models/products");

const buy_without_discount=async (req, res)=>{
    let {username}=req.body;
    let foundCart= await cartsModel.findOne({username});
    if(!foundCart){
        return res.json({message:"you have no products in your cart to buy"});
    }
    let products=foundCart.products;
    let totalPrice;
    for(let prod of products){
        let product=await productsModel.findOne({title:prod});
        totalPrice+=product.price;
    }
    res.json({products, totalPrice:totalPrice+'$'});
}

const buy_with_discount=async (req, res)=>{
    let {discount_coupon, username}=req.body;

    let foundCart= await cartsModel.findOne({username});
    if(!foundCart){
        return res.json({message:"you have no products in your cart to buy"});
    }
    let products=foundCart.products;
    let TPrice_before;
    for(let prod of products){
        let product=await productsModel.findOne({title:prod});
        TPrice_before+=product.price;
    }
    res.json({products, Total_before_discount:TPrice_before+'$', Total_after_discount:TPrice_before-(TPrice_before*0.20)});
}

module.exports={buy_without_discount, buy_with_discount}
