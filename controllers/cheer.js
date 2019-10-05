const express = require("express")
const router = express.Router();
const CheerUpModel=require("../models/Cheer");





// router.get("/",(req,res)=>{

//     CheerUpModel.find({}).then(cheer=>{
//         res.json(cheer)
//         // res.send("hi")
//     })
// })

// router.get("/",(req,res)=>{

//     CheerUpModel.find({}).then(cheer=>{
//         // res.send("hello")
//         res.json(cheer)
//         console.log(cheer)

//         // console.log(persons)
//     })
// });



router.get("/", (req, res) => {
    CheerUpModel.find({}).then(cheer => res.render('index', { cheer }))
  });
  





module.exports=router;