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
 

  // router.get("/edit/:title", (req, res) => {
  
  //   // CheerUpModel
  //   //   .find({ topic: req.params.topic })
  //   //   .then(cheer => res.json(cheer));

  //   res.render("edit")

  // });

//   router.put("/:title/edit",(req,res)=>{
//     if(req.body.complete==="on"){
//         req.body.complete=true;
//     }
//     else{
//         req.body.complete=false;
//     }
//     console.log(req.body)
//     CheerUpModel.findOneAndUpdate({title:req.params.title}, req.body).then(cheer=>{
//         res.redirect("/");
//     });
// });















  router.get("/new", (req, res) => {
   res.render("new")
  });
  

  router.get("/show", (req, res) => {
    CheerUpModel.find({topic}).then(cheer => res.render('index', { cheer }))
  });


  router.get("/edit/:title", (req, res) => {
    CheerUpModel.findOne({ title: req.params.title }).then(myInstance => res.render('edit', { myInstance }));
  });
  




router.put('/edit/:title', (req, res) => {
  CheerUpModel.findOneAndUpdate({title: req.params.title}, req.body, { new: true })
    .then(cheer => {
      res.redirect("/");
      // res.json('cheer')
    })
});
  // router.get("/show", (req, res) => {
  //   CheerUpModel.find({}).then(cheer => res.render( { cheer }))
  // })


  // router.get("/:title", (req, res) => {
  //   CheerUpModel.find({ title: req.params.title }).then(cheer => 
  //     // res.json(cheer));
  //     res.render('show'))
  // });

  router.get("/:title", (req, res) => {
    CheerUpModel.findOne({ title: req.params.title }).then(myInstance => res.render('show', { myInstance }));
  });
  

  
  router.delete("/:title", (req, res) => {
    CheerUpModel.findOneAndDelete({ title: req.params.title }).then(cheer => {
      res.redirect("/");
    });
  });
 
  
  

module.exports=router;







