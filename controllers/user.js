const path = require("path");

const User = require("../models/user");


const handleLoginPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"./views/index.html"));
}

const handleSignupPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"./views/indexReg.html"));
}
// exports
module.exports = {
    handleLoginPage,
    handleSignupPage,
}