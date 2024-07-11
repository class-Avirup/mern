const mongoose=require('mongoose')
const cartSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
module.exports=mongoose.model("Cart",cartSchema);