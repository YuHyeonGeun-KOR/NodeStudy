const {odd,even} = require('./var');
const checkNumber = require('./func');

function checkStringOddorEven(str){
    if (str.length % 2){
        return odd;
    }
    else{
        return even;
    }
}
console.log(checkStringOddorEven('안녕하세요 유현근입니다.'))
console.log(checkNumber(101010))