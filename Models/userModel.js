const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
mongoose.connect("mongodb://127.0.0.1:27017/ochii")

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    username:String,
    isAdmin:{
        type:Boolean,
        default:false
    }
    
})
module.exports=mongoose.model('User',userSchema);
