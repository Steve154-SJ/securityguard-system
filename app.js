/*
---------------------------------------------------------------------------------------------------------------------------------------
step to follow:

1. check in folder and file section if package.json file and other files are there
2. if package.json is present then run "npm install" in terminal 
3. check if node_modules folder appeared 
   else trouble shoot the issue
4. check for nodemon and express in dependency section inside package.json file 
5. run npm start in terminal
6. navigate to port:5000 on a browser

Bonus -->To exit from nodemon enter "ctrl + c" twice
----------------------------------------------------------------------------------------------------------------------------------------
*/

// imports
const express = require("express");

const staticRoute = require("./routes/staticRoutes");
const userRoute = require("./routes/user");
const {connectToMongoDB} = require("./connect")

// declaration 
const app = express();
const PORT = 5000;


//Connection
connectToMongoDB("mongodb://127.0.0.1:27017/Security-Guard-System_DB")
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(`MongoDB ERROR:${err}`);
});


// Middleware-plugin 
app.use(express.urlencoded({extended:false}));
app.use(express.static("./public"));

// Routes 
app.use("/api",staticRoute);
app.use("/api",userRoute);
app.use("/",staticRoute);


//Start Server 
app.listen(PORT,()=>{
    console.log(`Server Started at PORT:${PORT}`);
})
//checks