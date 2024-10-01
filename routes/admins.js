const {Router} = require("express");
const adminsRouter = Router();
const { adminsModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");


const{ JWT_ADMIN_PASSWORD }=require("../config");
const {adminsMiddleware} = require("../middleware/admins");
//adminsRouter.use(adminsMiddleware); // this file will protected by adminsmiddleware
adminsRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password so plaintext pw is not stored in the DB

    // TODO: Put inside a try catch block
    await adminsModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Signup succeeded"
    })
})

adminsRouter.post("/signin",async function(req,res){
    const { email ,password } = req.body;  

    //TODO:  ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const user = await adminsModel.findOne({
        email:email,
        password:password
    });

    if(admins){
        const token = jwt.sign({
            id:admins._id
        },JWT_ADMIN_PASSWORD);


        
        res.json({
            token:token
        })
    } else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
    res.json({
        message:"signin endpoint"
    })
})

adminsRouter.post("/course", adminsMiddleware,async function(req,res){
    const adminId = req.userId;

    const {title , description , imageUrl ,price} = req.body;

   const course= await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:creatorId
    })

    res.json({
        message:"course created",
        courseId:course._id
    })
})
// user want to update the course
adminsRouter.put("/course",adminsMiddleware ,async function(req,res){
    const adminId = req.userId;

    const {title , description , imageUrl ,price , courseId} = req.body;

   const course= await courseModel.updateOne({
    _id:courseId , // ye dono same person ki id rahegi tb hi hoga
    creatorId:adminId // same person creatorid

   },{
    // jaha pr ye course id h waha pr ye title ,discription ,price ,image change kr do 
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        
    })

    res.json({
        message:"course updated",
        courseId:course._id
    })
})

adminsRouter.get("/course/bulk", adminsMiddleware ,async function(req,res){
    const adminId = req.userId;

   const course = await courseModel.find({
    creatorId:adminId
   });

  

    res.json({
        message:"course updated",
        courseId
    })
})

module.exports = {
    adminsRouter:adminsRouter
}