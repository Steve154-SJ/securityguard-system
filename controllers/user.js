const path = require("path");

const User = require("../models/user");


const handleLoginPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"../views/Login.html"));
}

const handleSignupPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"../views/NewReg.html"));
}
// exports
module.exports = {
    handleLoginPage,
    handleSignupPage,
}