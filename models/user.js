// Import 
const mongoose = require("mongoose")

// Schema 
const userSchema = mongoose.Schema({
    regNo:{
        type: String,
        required: true,
        unique: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
    },
    number:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
},
{timestamps: true}
);

//Model
const User = mongoose.model("user",userSchema);

//exports
module.exports = User;