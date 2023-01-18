/// Between Two Sets

// let a = [2, 6];
// let b = [24, 36];

// // getTotalx(a, b)
// function getTotalx(){
//     let count = 0;

//     for ( let x = 1; x <= 100 ; x++){
//         if ( a.every (int => (x % int == 0))) {
//             if (b.every (int => (int % x == 0))) {
//                 count++;
//             }
//         }                    
//     };
//     // return count;
//     // console.log(count);
// }






// children  = 2 ( Lily & Ron )
// chocolate = 1

// sum of int on sq  d === 4 -> Ron's birthday
// chocolate bar . length m === 2 -> ron's birth month

// let x be the no of ways in which chocolate could divide
// return x = ?


// let s = [2,2,1,3,2];
// let d = 4;
// let m = 2;

// const hacker = getWays(s,d,m)
// console.log ( hacker )


// function birthday(s, d, m) {

//     let partsOfChocolate = 0;
//     for (let i = 0; i < s.length - (m - 1); i++){
//         let subArraySum = 0;

//         for (let j = i; j < i + m; j++){
//             subArraySum += s[j];
//         }
//         if (subArraySum === d)
//             partsOfChocolate++
//     }
//     return partsOfChocolate;
// }



// Given an array of integers and a positive integer k , determine 
// the number of (i , j) pairs where i < j and ar[i] + ar[j]  is divisible by k.

// const ar= [1,3,2,6,1,2];
// const k = 3;
// let n = ar.length;

// const prob = function divisibleSumPairs(n, k, ar) {
//     var countOfPairs = 0

//     for( let j = 0; j < n - 1; j++){
//         for (let i = j + 1; i < n ; i++)
//             if((ar[i] + ar[j]) % k === 0)
//                 countOfPairs++;
// }
// return countOfPairs;
// }

// console.log(prob())



// Migratory Birds
//=====================================================================
//Given an array of bird sightings where every element represents 
//a bird type id, determine the id of the most frequently sighted type. 
//If more than 1 type has been spotted that maximum amount, return the 
//smallest of their ids.


// console.log(migratoryBirds([1,2,2, 4,4]));

// function migratoryBirds(arr) {

//      let counts = [0,0,0,0,0,0];

//      for (let i = 0; i <arr.length; i++)
//         counts[arr[i]]++;

//      let max = Math.max(...counts);

//      return counts.findIndex( typeCount => typeCount === max )

// };


// Hacker Rank - Diagonal Difference
//=====================================================================


// let arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]


// function diagonalDifference (arr){
// let line1 = arr[0];
// let line2 = arr[1];
// let line3 = arr[2];

// let rightDiagonal = line1[0] + line2[1] + line3[2]
// let leftDiagonal = line1[2] + line2[1] + line3[0]
// 
// return Math.abs ( rightDiagonal - leftDiagonal )
// }


// 4
//     arr = [[-1, 1, -7, -8], [-10, -8, -5, -2], [0, 9, 7, -1], [4, 4, -2, 1]]

//     console.log(diagonalDifference(arr));

// function diagonalDifference(arr) {

// let rightDiagonal = 0;
// let leftDiagonal = 0;
//     for(let i = 0; i<arr.length; i++) {

//         rightDiagonal += arr[i][i]; // -1 === -1, -8, 7 , 1 = 

//         leftDiagonal += arr[i][arr.length - i - 1]; // 0 === -8, -5, 9, 4

//     }
//  return Math.abs(rightDiagonal - leftDiagonal);

// };


// HackerRank - Picking Numbers
// =============================================================================================================================

let b = [4, 6, 5,3 , 3, 1];

// console.log(pickingNumbers(b));

function pickingNumbers(b) {

    let sorted = a.sort();
    
    let currentArray = [];
    let startNumber = 0;
    let longestArrayLength = 0;

    for ( let i = 0; i < sorted.length ; i++) {
        let result = Math.abs(sorted[startNumber] - sorted[i])
        
        if( result <= 1){
            currentArray.push(sorted[i])

            if(currentArray.length > longestArrayLength)
            longestArrayLength = currentArray.length;

        } else {
            startNumber = i;

            if(currentArray.length > longestArrayLength)
            longestArrayLength = currentArray.length;

            currentArray = []
            currentArray.push(sorted[i])

        }
    }
    return longestArrayLength;

};


// HackerRank - CamelCase

let s = 'oneTwoThree';

// console.log(camelCase(s));

function camelCase(s) {
    let s2 = s.toLowerCase();
    let result = "";
    
    for ( let i = 0; i < s.length ; i++){
        if( s[i] !== s2[i]){
            result = result + " " + s[i]
            // console.log(result);
        } else {
            result = result + s2[i];

        }
    } 
    // console.log(result);  // one Two Three

    const words = result.split(' ')
    return words.length;
}

// HackerRank - Strong Password


// password will be strong if:
//===========================================================================
// atleast 1 number !=== count 1
// atleast 1 lowercase aphabet !=== count 2
// atleast 1 uppercase alphabet !=== count 3
// atleast 1 special character !@#$%^&*()-+ !=== count 4

// password.length === 6

let password = 'aaaaa';
let n = password.length;

console.log(minimumNumber (n, password));

function minimumNumber (n, password){

    let numbers = /[0123456789]/;
    let lower_case = /[abcdefghijklmnopqrstuvwxyz]/;
    let upper_case = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    let special_characters = /[!@#$%^&*()--+]/;
    let minCharacter = 6;
    
    let requiredChar = 0;

    if (!numbers.test(password)) requiredChar++;
    if (!lower_case.test(password)) requiredChar++;
    if (!upper_case.test(password)) requiredChar++;
    if (!special_characters.test(password)) requiredChar++;
    

    // return requiredChar;

    if( n < minCharacter && (minCharacter - n) > requiredChar ){
    return minCharacter - n
    }

    else {
        return requiredChar
    }
    
}