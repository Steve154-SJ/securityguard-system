/*
step to follow:

1. check in folder and file section if package.json file and other files are there
2. if package.json is present then run "npm install" in terminal 
3. check if node_modules folder appeared 
   else trouble shoot the issue
4. check for nodemon and express in dependency section inside package.json file 
5. run npm start in terminal
6. navigate to port:5000 on a browser

Bonus -->To exit from nodemon enter "ctrl + c" twice
*/

//import module 
const express = require('express');
const path = require('path');

//invoke module
const app = express();

app.use(express.static("./public"))

app.get("/",(req,res)=>{
    
    res.status(200).sendFile(path.resolve(__dirname,"./index.html"))
})

app.get("/index.html",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,"./index.html"))
})

app.get("/indexReg.html",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,"./indexReg.html"))
})

//Post Request on progress
app.post("/api/userLogin",(req,res)=>{
    res.status(200).send("Signed in Successfully");
})

app.post("/api/userRegistered",(req,res)=>{
    res.status(200).send("Registration completed");
})

app.all("*",(req,res)=>{
    res.status(404).send("<h1>Status 404: Page not found</h1>")
})

//run server on port:5000
app.listen(5000,()=>{
    console.log("Server is listening on port:5000");
})
