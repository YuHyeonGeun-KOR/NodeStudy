const value = require('./var');
console.log(value);

function checkOddOrEven(number){
    if (number % 2){
        return value.odd;
    }
    else{
        return value.even;
    }
}

module.exports  = checkOddOrEven;