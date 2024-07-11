const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/ochii")
const querySchema= mongoose.Schema({
    name: String,
    company: String,
    goal:String,
    date:String,
    budget:String,
    email:String,
    details:String
    
    
})
module.exports=mongoose.model('query',querySchema);