// Imports
const path = require("path");

// handlers
const handleMainPage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"../views/index.html"));
}

const handleHomePage = (req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,"../views/home.html"));
}
// exports
module.exports = {
    handleMainPage,
    handleHomePage,
}