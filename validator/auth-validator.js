const {z} =require('zod');//for validation......... view npm documentation for further details
const signupSchema=z.object({
    username:z.string({required_error:"name is a required field"}).trim().min(3,{message:"usn must be of three characters"}).max(25,{message:"Name must be of max 25 characters"})
    ,
    password:z.string({required_error:"name is a required field"}).trim().min(3,{message:"password must be of three characters"}).max(25,{message:"Name must be of max 25 characters"})
    ,
    email:z.string({required_error:"name is a required field"}).trim().email({message:"invalid email address"}).min(3,{message:"Name must be of three characters"}).max(25,{message:"email must be of max 25 characters"})
    ,
    name:z.string({required_error:"name is a required field"}).trim().min(3,{message:"Name must be of three characters"}).max(25,{message:"Name must be of max 25 characters"})
    
})

module.exports={signupSchema}
//validation is not enabled in the project now read the documentations to know and implement the zod validation and middleware is created as well just make sure to integrate it by validate(signupSchema)in router