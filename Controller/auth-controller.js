const user=require('../Models/userModel');
const query=require('../Models/user-query')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const course=require('../Models/userCourses');
const cart=require('../Models/userCart')

const home=(req,res)=>{
    try{
        res.status(200).send("hik")
    }
    catch(error){
        console.log(error)
    }
}
const register=async (req,res)=>{
   
    try{
        let generateToken=async function(){
            try{
            return jwt.sign({
                userId:this._id,
                email:this.email,
                isAdmin:this.isAdmin
            },"shhh",{expiresIn:"30d"})
            }
            catch(error){
            console.log(error)
            }
            }
      const {username,name,email,password}=req.body;
      const userExist= await user.findOne({email});
      
      if(userExist){
        navigate("/login");
        return res.status(200).send("user already registered")
        
      }
      const saltRounds=10;
      const hash_password=await bcrypt.hash(password,saltRounds)
      const userCreated=await user.create({username,name,password:hash_password,email});
      return res.status(200).json({msg:userCreated,token:await generateToken()})
    }
    catch(error){
        console.log(error)
    }
}
const  login= async(req,res)=>{
    try{
        let generateToken=async function(){
            try{
            return jwt.sign({
                userId:this._id,
                email:this.email,
                isAdmin:this.isAdmin
            },"shhh",{expiresIn:"30d"})
            }
            catch(error){
            console.log(error)
            }
            }
const {email,password}=req.body;
const userExist =await user.findOne({email})
if(!userExist){
    return res.status(200).json({message:"invalid credentials"})
  }
  const isValid=await bcrypt.compare(password,userExist.password)
  if(isValid){
    if(email==="avirup@gmail.com"&&password==="avirup"){
        userExist.isAdmin=true;
        // for admin verification and admin panel selection
    }
    
    return res.status(200).json({msg:userExist,token:await generateToken(),voice:"Login done"})
    
    }
    return res.status(401).json({message:"invalid email or password"})
}
    catch(error){
        res.status(500).send("internal server error")
    }
}
const details=async(req,res)=>{
    try{const userData=req.user;
        console.log(userData)
        return res.status(200).json({msg:userData})

    }
    catch(error){
        console.log(`error from the route ${error}`)
    }
}

const form=async(req,res)=>{
    try{
const {name,company,goal,date,budget,email,details}=req.body;
const formResults=await query.create({name,company,goal,date,budget,email,details})
res.status(200).json({"msg":formResults})
    }
    catch(error){
        res.json({msg:"error"})

    }
}
const getQuery=async(req,res)=>{
    try{

const formResults=await query.find()
res.status(200).json(formResults)
    }
    catch(error){
        res.json({msg:"error"})

    }
}
const showCourse=async(req,res)=>{
    try{
const readCourse=await course.find()
res.status(200).json(readCourse)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const showUser=async(req,res)=>{
    try{
const readUser=await user.find()
if(readUser.length===0||!readUser){
    res.status(200).json({message:"No users yet"})
}
res.status(200).json(readUser)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const addCourse=async(req,res)=>{
    try{
        const {name,image,title,price,category}=req.body;
const newCourse=await course.create({name,image,title,price,category})
res.status(200).json(newCourse)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const addCart=async(req,res)=>{
    try{
        const {title}=req.body;
const cartItem=await course.find({title})
res.status(200).json(cartItem)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const delUser=async(req,res)=>{
    try{
        const _id=req.params.id;
const delUser=await query.deleteOne({_id})
if(!delUser){
    res.status(500).json({msg:"internal server error"}) 
}
res.status(200).json(delUser)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const delPost=async(req,res)=>{
    try{
        const _id=req.params.id;
const delUser=await course.deleteOne({_id})
if(!delUser){
    res.status(500).json({msg:"internal server error"}) 
}
res.status(200).json(delUser)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const delAccount=async(req,res)=>{
    try{
        const id=req.params.id;
        
const delAccount=await user.deleteOne({_id:id})
if(!delAccount){
    res.status(500).json({msg:"internal server error"}) 
}

res.status(200).json(delAccount)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const changeAccount=async(req,res)=>{
    try{
        const {name ,username,email,password}=req.body;
const changeAccount=await user.updateOne({email},{name,username,password})
if(!changeAccount){
    res.status(500).json({msg:"internal server error"}) 
}
res.status(200).json(changeAccount)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const changePost=async(req,res)=>{
    try{
        const {name,price,category,image,title}=req.body;
const changePost=await course.updateOne({title},{name,price,category,image,title})
if(!changePost){
    res.status(500).json({msg:"internal server error"}) 
}
res.status(200).json(changePost)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const getCart=async(req,res)=>{
    try{
        const _id=req.params.id.replace(':','');
const findCourse=await course.findOne({_id})
 const addtoCart=await cart.create({name:findCourse.name,title:findCourse.title,price:findCourse.price,image:findCourse.image,category:findCourse.category})
res.status(200).json(findCourse)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const showCart=async(req,res)=>{
    try{
const readCart=await cart.find()

res.status(200).json(readCart)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}
const delCart=async(req,res)=>{
    try{
        const _id=req.params.id;
const delCart=await cart.deleteOne({_id})
if(!delCart){
    res.status(500).json({msg:"internal server error"}) 
}
res.status(200).json(delCart)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }
}

module.exports={home,register,login,details,form,showCourse,addCourse,addCart,showUser,getQuery,delUser,delAccount,changeAccount,delPost,changePost,getCart,showCart,delCart};
    // userSchema.pre('save', async function(next){
// const user=this;
// if(!user.isModified("password")){
//     next();
    
// }
// else{
//     try{
//         const saltRounds=await bcrypt.genSalt(10) ;
//         const hash_password=await bcrypt.hash(password,saltRounds)
// let user.password=hash_password;
//     }
//     catch(error){
// next(error);
//     }
// }
// })