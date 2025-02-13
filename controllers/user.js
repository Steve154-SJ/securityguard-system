const path = require("path");
const {v4: uuidv4} = require("uuid");
const User = require("../models/user");
const {generateRegNo} = require("../services/createRN");
const {setUser,getUser} = require("../services/auth");

const handleLoginPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"../views/Login.html"));
}

const handleSignupPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"../views/NewReg.html"));
}

const handleLoginPostReq = async(req,res)=>{
    const {username,id,password} = req.body;
    
    const user = await User.findOne({firstName:username,regNo:id,password:password});
    
    if(!user){
        return res.status(400).redirect("/api/login")
    }
    const sessionId = uuidv4();
    setUser(sessionId,user);
    res.cookie("uuid",sessionId);
    return res.status(200).redirect("/homepage");
    
}

const hanleSignupPostReq = async(req,res)=>{
    console.log(req.body);
    const regNo = generateRegNo();
    const {fname,lname,number,password}= req.body;
    const result = await User.create({
        regNo: regNo,
        firstName:fname,
        lastName:lname,
        number:number,
        password:password,
    })
    return res.status(200).redirect("/homepage");
    
}

// exports
module.exports = {
    handleLoginPage,
    handleSignupPage,
    handleLoginPostReq,
    hanleSignupPostReq,
}