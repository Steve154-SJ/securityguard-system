let i = 1;

function formatedDigit(number) {
    number = number.toString();

    while(number.length < 4) {
        number = "0" + number;
    }

    return number;
}

const generateRegNo = ()=>{
    const year = new Date().getFullYear().toString().slice(-2);
    const regNo = "NNM"+year+"CS"+formatedDigit(i++);
    return regNo;
}

module.exports = {
    generateRegNo,
};

