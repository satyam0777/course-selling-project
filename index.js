const express = require("express");

const app = express();


app.post("/user/signup",function(re,res){
    res.json({
        message:"signup endpoint"
    })
})

app.post("/user/signin",function(re,res){
    res.json({
        message:"signup endpoint"
    })
})

app.get("/user/purchases",function(re,res){
    res.json({
        message:"signup endpoint"
    })
})

app.post("/courses/purchase",function(re,res){
    res.json({
        message:"signup endpoint"
    })
})
app.get("/courses",function(re,res){
    res.json({
        message:"signup endpoint"
    })
})

app.listen(3000);