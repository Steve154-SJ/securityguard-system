let i = 0;

function formatedDigit(number) {
    number = number.toString();

    while(number.length < 3) {
        number = "0" + number;
    }

    return number;
}


const generateRegNo = async()=>{
    const year = new Date().getFullYear().toString().slice(-2);
    const regNo = "NNM"+year+"CS"+formatedDigit(i++);
    return regNo;
}

module.exports = {
    generateRegNo,
};

