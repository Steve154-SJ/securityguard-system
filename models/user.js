// Import 
const mongoose = require("mongoose")

// Schema 
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
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