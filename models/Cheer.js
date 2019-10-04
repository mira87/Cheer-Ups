const mongoose=require("../app/db/connection");

const cheerUpSchema= new mongoose.Schema({
    title:"String",
    topic:"String",
    text:"String"


}) 

const CheerUpModel =mongoose.model("CheerUpModel",cheerUpSchema);

module.exports=CheerUpModel;