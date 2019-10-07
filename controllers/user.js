const express = require("express")
const router = express.Router();
const UserModel=require("../models/User");
const bcrypt=require('bcryptjs')



// //Register form

// router.get("/register",(req,res)=>{

//     res.render("register")
// });

// //register process

// router.post("/register",(req, res)=>{
//     const{name,email,password,password2}=req.body;
//     let errors=[];


//     //check required fields
//     if(!name ||!email ||!password||!password2){
//         errors.push({msg:'Please fill in all fields.'})
//     }

//     //Check pw match
//     if(password !==password2){
//         errors.push({msg: 'Passwords do not match.'})
//     }

//     //CHeck pw length
//     if(password.length<6){
//         errors.push({msg:'Password should be at least 6 characters.'})
//     }
//     if(errors.length>0){
//         res.render('register',{
//            errors, 
//            name,
//            email,
//            password,
//            password2
//         })
//     }
//     else{
//         res.send('pass')
//     }
// })



// //Login
// router.get("/login",(req,res)=>{
//     res.render('login')
// })


module.exports=router;