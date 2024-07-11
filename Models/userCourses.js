const mongoose=require('mongoose')
const courseSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
module.exports=mongoose.model("Course",courseSchema);