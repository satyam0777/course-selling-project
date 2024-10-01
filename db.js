const mongoose = require("mongoose");

const Schema = mongoose.Schema;  //Schema is a class so it initilize new Schema (object h)
const ObjectId = mongoose.Types.ObjectId;
const userSchema = new Schema({
    email:{type:String ,unique:true},
    password:String,
    firstName:String,
    lastName:String,

});

const adminsSchema = new Schema({

    email:{type:String ,unique:true},
    password:String,
    firstName:String,
    lastName:String,

});

const courseSchema = new Schema({
   title:String,
   description:String,
   price:Number,
   imageUrl:String,
   creatorId:ObjectId


});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId

});

const userModel = mongoose.model("user",userSchema);
const adminsModel = mongoose.model("admins",userSchema);
const courseModel = mongoose.model("course",userSchema);
const purchaseModel = mongoose.model("purchase",userSchema);

module.exports={
    userModel,
    courseModel,
    courseModel,
    purchaseModel
}