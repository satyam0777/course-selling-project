require('dotenv').config()
// console.log(process.env.MONGO_URL)
const express = require("express");
const  mongoose= require("mongoose");

const { userRouter} = require("./routes/user");
const { courseRouter} = require("./routes/course");
const { adminsRouter} = require("./routes/admins");


const app = express();
app.use(express.json());

//initial routes yaha mention kr do
app.use("/user",userRouter); // aise krne pr hum kuch bhi bhej skte h like--/api/vi/user aisa kuch
app.use("/course",courseRouter);
app.use("/admins",adminsRouter);

async function main(){
   await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
}

main();