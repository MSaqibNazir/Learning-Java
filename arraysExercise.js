// 1. Array from Range

const numbers = arrayFromRange(-10, 4);

// console.log(numbers);

function arrayFromRange( min, max ){
    
    const resultArray = [];
    for (let i = min; i <= max ; i++) {
        resultArray.push(i);
    }
    return resultArray;
}

// ALHAMDULILLAH I Have done this :)

// Exercise2 - Includes
//=============================================================

const numbI = [1,2,3,4];


console.log(includes(numbI,5));

function includes(array, searchElement){
    for ( n of array) 
     if ( n === searchElement ) 
    return true;
        
    return false;
    
}