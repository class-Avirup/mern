const jwt=require("jsonwebtoken")
const authDetailsJwt = async (req,res,next) => {
 const token=req.header("Authorization");
 if(!token){
    res.status(401).json({msg:"http error "})
 }
 console.log("token from authorization",token);
 const jwtoken=token.replace("Bearer","").trim();
 console.log(jwtoken)//token from frontend
 try{
   const isVerified= jwt.verify(jwtoken, 'shhh');
      console.log(isVerified)
 }
 catch(error){
return res.status(400).json({msg:"invalid token"})
 }
 next();
}

module.exports= authDetailsJwt