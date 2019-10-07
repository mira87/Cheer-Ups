const express = require('express')
const app=express();
const mongoose= require('mongoose')
const cheerUpController = require("./controllers/cheer");
const userController = require("./controllers/user");
const parser=require("body-parser");
const methodOverride=require("method-override");
// const expressValidator = require('express-validator');

// const api = express.Router();
// app.use(expressValidator())




const hbs= require("hbs");

app.set("view engine", "hbs");

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(methodOverride("_method"))



app.get("/",(req,res)=>{
    // res.redirect("/cheer");
    res.send("hi")
});

// app.get("/user",(req,res)=>{
//     res.redirect("/user");
// });



app.use("/user/", userController);
app.use("/cheer/", cheerUpController);

app.use('/public', express.static('public'))


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });