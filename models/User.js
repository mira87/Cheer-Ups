const mongoose=require("../app/db/connection");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    favorites:["String"]


}) 

const UserModel =mongoose.model("UserModel",userSchema);

module.exports=UserModel;

