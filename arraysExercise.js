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


// console.log(includes(numbI,5));

function includes(array, searchElement){
    for ( n of array) 
     if ( n === searchElement ) 
    return true;
        
    return false;
    
}


// Exercise3 - Except
//=============================================================

const numbE = [ 1, 3, 5, 7, 1, 1 ];

// console.log(except(numbE, [1,3]));

function except ( array, excludedValue ){
    const output = [];

    for ( let element of array )
    
    if ( !excludedValue.includes(element) )
        output.push(element);
    
    return output;
};


// Exercise4 - Moving an Element
//=============================================================
const numbM = [1,2,3,4];

const outPut = move(numbM, 2 , 1);

// console.log(outPut);

function move(array, index, offset){
    const position = index + offset
    if ( position >= array.length || position < 0){
        console.error('Invalid Offset.');
        return
    }
      
    const outPut = [...array];
    // first we have to delete that element and then add it
    const element = outPut.splice(index,1)[0];
    outPut.splice (position, 0, element)
    return outPut;
};




// Exercise5 - Count Occurrences
//=============================================================
 const numbC = [1, 2, 3, 4, 3, 2, 1, 1,2];

const count = countOccurrences(numbC, 1 );

console.log(count);

function countOccurrences (array, searchElement){
//     let counter = 0;

//     for (let n of array)
//     if( n == searchElement) counter++;
    
// return counter;
// lets how to use reduce method to achive this same result


// accumulator means the number times the searched element occured in array

return array.reduce((accumulator, current) => {
const occurrence = (current === searchElement) ? 1 : 0;
// to check whats ahppening
console.log(accumulator, current, searchElement);
return accumulator + occurrence;
}, 0);

 };

