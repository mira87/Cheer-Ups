const express = require("express")
const router = express.Router();
const UserModel=require("../models/User");






router.get("/",(req,res)=>{

    UserModel.find({}).then(user=>{
        // res.send("hello")
        res.json(user)
        console.log(user)

        // console.log(persons)
    })
});









module.exports=router;