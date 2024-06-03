const mongoose = require("mongoose")
const adminSchema=new mongoose.Schema({
    name:{type:String,text:true},
    email:{type:String,text:true},
    mobile:{type:number,text:true},
    role:{type:String,text:true},
    password:{type:String,number:true},

})
module.exports=mongoose.Schema('admin',adminSchema)