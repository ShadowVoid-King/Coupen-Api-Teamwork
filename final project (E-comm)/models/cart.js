const mongoose=require('mongoose')

const CartSchema= new mongoose.Schema({
    productName:{
        type:[String],
        required:true
    },
    username:{
        type:String,
        required:true
    }
    
})
const CartData=mongoose.model('cartdata',CartSchema)
module.exports={CartData}
