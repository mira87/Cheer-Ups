const express = require("express")
const router = express.Router();
const CheerUpModel = require("../models/Cheer");


router.get("/", (req, res) => {
  CheerUpModel.find({}).then(cheer => res.render('index', { cheer }))
});


router.post("/", (req, res) => {
  CheerUpModel.create(req.body).then(cheer => {
    res.redirect("/");
  });
});

router.get("/find", (req, res) => {
  res.render("find")
})

router.post("/find", (req, res) => {
  CheerUpModel.findOne({ title: req.body.title }).
  then(myInstance => {
    res.redirect(`/cheer/${myInstance.title}`)
  });


});

router.get("/show", (req, res) => {
  res.render("show")
});


router.get("/new", (req, res) => {
  res.render("new")
});

router.get("/edit/:title", (req, res) => {
  CheerUpModel.findOne({ title: req.params.title }).then(myInstance => res.render('edit', { myInstance }));
});


router.put('/edit/:title', (req, res) => {
  CheerUpModel.findOneAndUpdate({ title: req.params.title }, req.body, { new: true })
    .then(cheer => {
      res.redirect("/");
    })
});

router.get("/:title", (req, res) => {
  CheerUpModel.findOne({ title: req.params.title }).then(myInstance => res.render('show', { myInstance }));
});

router.post("/:title", (req, res) => {
  CheerUpModel.findOne({ title: req.body.title }).then(myInstance => res.render('show', { myInstance }));
});


router.delete("/:title", (req, res) => {
  CheerUpModel.findOneAndDelete({ title: req.params.title }).then(cheer => {
    res.redirect("/");
  });
});

module.exports = router;







