const mongoose=require("../app/db/connection");

const userSchema= new mongoose.Schema({
    title:"String",
    topic:"String",
    text:"String"


}) 

const UserModel =mongoose.model("UserModel",userSchema);

module.exports=UserModel;

