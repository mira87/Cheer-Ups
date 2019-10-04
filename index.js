const express = require('express')
const app=express();
const cheerUpController = require("./controllers/cheer");
const userController = require("./controllers/user");
const parser=require("body-parser");



app.use(parser.urlencoded({extended: true}))
app.use(parser.json())


app.get("/cheer",(req,res)=>{
    res.redirect("/cheer");
});

app.get("/user",(req,res)=>{
    res.redirect("/user");
});



app.use("/user/", userController);
app.use("/cheer/", cheerUpController);



app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});