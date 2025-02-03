const path = require("path");

const User = require("../models/user");


const handleLoginPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"../views/Login.html"));
}

const handleSignupPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"../views/NewReg.html"));
}

const handleLoginPostReq = async(req,res)=>{

}

const hanleSignupPostReq = async(req,res)=>{
    console.log(req.body);
    
    const {fname,lname,number,password}= req.body;
    const result = await User.create({
        firstName:fname,
        lastName:lname,
        number:number,
        password:password,
    })
    console.log(result);
    return res.status(200).redirect("/homepage");
    
}

// exports
module.exports = {
    handleLoginPage,
    handleSignupPage,
    handleLoginPostReq,
    hanleSignupPostReq,
}