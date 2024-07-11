const {z} =require('zod');
const querySchema=z.object({
    name:z.string({required_error:"name is a required field"}).trim().min(3,{message:"name must be of three characters"}).max(25,{message:"Name must be of max 25 characters"})
    ,
    company:z.string({required_error:"company is a required field"}).trim().min(3,{message:"company must be of three characters"}).max(25,{message:"Company must be of max 25 characters"})
    ,
    goal:z.string({required_error:"goal is a required field"}).trim().min(3,{message:"goal must be of three characters"}).max(25,{message:"Goal must be of max 25 characters"})
    ,
    date:z.string({required_error:"date is a required field"}).trim().min(3,{message:"date must be of three characters"}).max(25,{message:"Date must be of max 25 characters"})
    ,
    budget:z.string({required_error:"budget is a required field"}).trim().min(3,{message:"budget must be of three characters"}).max(9,{message:"Budget must be of max 25 characters"})
    ,
    email:z.string({required_error:"email is a required field"}).email({message:"invalid email address"}).trim().min(3,{message:"email must be of three characters"}).max(25,{message:"Email must be of max 25 characters"})
    ,
    details:z.string({required_error:"details is a required field"}).trim().min(3,{message:"details must be of three characters"}).max(150,{message:"Details must be of max 150 characters"})
})
module.exports={querySchema};//add validation later