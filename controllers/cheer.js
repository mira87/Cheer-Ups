const express = require("express")
const router = express.Router();
const CheerUpModel=require("../models/Cheer");





router.get("/",(req,res)=>{

    CheerUpModel.find({}).then(cheers=>{
        // res.json(cheers)
        res.send("hi")
    })
})










module.exports=router;