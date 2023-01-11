// 1. Array from Range

const numbers = arrayFromRange(-10, 4);

console.log(numbers);

function arrayFromRange( min, max ){
    
    const resultArray = [];
    for (let i = min; i <= max ; i++) {
        resultArray.push(i);
    }
    return resultArray;
}