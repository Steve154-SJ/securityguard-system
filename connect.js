// Imports
const mongoose = require("mongoose");

const connectToMongoDB = (url)=>{
    return mongoose.connect(url)
}

// exports
module.exports = {
    connectToMongoDB,
}