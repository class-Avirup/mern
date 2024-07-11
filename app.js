const express=require('express')
const cors=require('cors')
const app=express();
const userModel=require("./Models/userModel")
const cookieParser=require('cookie-parser');
const path=require('path');
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT;
const { register } = require('module');
const connectDb=require("./Models/userModel")
const router=require('./Router/auth-user')//importing router from the userjs file
const corsOptions={
   origin:"http://localhost:5173",
   method:"GET, POST, PUT, DELETE",
   credentials:true
}
app.use(cors(corsOptions))//handling cors policy issue
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use("/api/auth",router)//use router mounting


   app.listen(port)
  