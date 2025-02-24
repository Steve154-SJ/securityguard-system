const User = require("../models/user");


const CountNoOFEntries = async()=>{
    try{
        let count = await User.countDocuments();
        return count;
    } catch(err)
    {
        console.log("Error Occurred: ",err);
    }

}

function formatedDigit(number) {
    number = number.toString();

    while(number.length < 3) {
        number = "0" + number;
    }

    return number;
}


const generateRegNo = async()=>{
    const year = new Date().getFullYear().toString().slice(-2);
    let count = await CountNoOFEntries();
    const regNo = "NNM"+year+"CS"+formatedDigit(++count);
    return regNo;
}

module.exports = {
    generateRegNo,
};

