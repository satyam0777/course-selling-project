const jwt = require("jsonwebtoken");
const{JWT_ADMIN_PASSWORD}=require("../config");
const admins = require("../routes/admins");

function adminsMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD)

    if(decoded){
        req.userId=decoded.id;
        next()
    } else{
        res.status(403).json({
            message:"you are not signed in"
        })
    }

}

module.exports={
    adminsMiddleware:adminsMiddleware
}