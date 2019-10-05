const mongoose=require("../app/db/connection");

const userSchema= new mongoose.Schema({
    name:"String",
    email:"String",
    favorites:["String"]


}) 

const UserModel =mongoose.model("UserModel",userSchema);

module.exports=UserModel;

