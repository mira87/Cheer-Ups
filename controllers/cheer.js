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
  

  router.post("/", (req, res) => {
    CheerUpModel.create(req.body).then(cheer => {
      res.redirect("/");
    });
  });

  router.get("/find",(req,res)=>{
    res.render("find")
  
  })
  
  


  router.get("/show", (req, res) => {
  
    // CheerUpModel
    //   .find({ topic: req.params.topic })
    //   .then(cheer => res.json(cheer));

    res.render("show")

  });



  router.get("/new", (req, res) => {
   res.render("new")
  });
  

 

  router.get("/show/:topic", (req, res) => {
    CheerUpModel.find({ topic: req.params.topic }).then(myInstance => res.render('show', { myInstance }));
  });
  
  router.delete("/:title", (req, res) => {
    CheerUpModel.findOneAndDelete({ title: req.params.title }).then(() => {
      res.redirect("/");
    });
  });
  // router.get("/show", (req, res) => {
  //   CheerUpModel.find({topic}).then(cheer => res.render('index', { cheer }))
  // });
  

module.exports=router;







