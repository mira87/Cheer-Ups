

const express = require('express')
const app=express();
const mongoose= require('mongoose')
const cheerUpController = require("./controllers/cheer");
const parser=require("body-parser");
const methodOverride=require("method-override");



const hbs= require("hbs");

app.set("view engine", "hbs");
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(methodOverride("_method"))






app.get("/",(req,res)=>{
    res.redirect("/cheer");
});














app.use("/cheer/", cheerUpController);

app.use('/public', express.static('public'))


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });