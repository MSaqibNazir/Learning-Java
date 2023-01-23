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

// let b = [4, 6, 5,3 , 3, 1];

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

// console.log(minimumNumber (n, password));

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



// let str = 'saaqiiiib';

// let strParts = str.split('')
// let newArray = []

// for( let i = 0; i < strParts.length ; i++){
//     // console.log(strParts[i])
//     if (strParts[i] === 'a')
//     newArray.push(strParts[i])

// }
// console.log(newArray.join(' '));


// let a = "JACK";
// let b = "DANIEL";

// console.log(morganAndString(a, b));

// function morganAndString ( a, b ) {
    // let newString = "";

    // if (a.length < b.length) {
    //     for ( let i = 0; i < b.length ; i++){
    //         // console.log(b[i]);

    //         for ( let j = 0; j < a.length ; j++){
    //             // console.log( b[i], a[j]);

    //             if ( b[i] < a[j]){ 
    //             newString = newString + b[i]
    //             return newString
    //             }
    //         }
    //     }
    // }

    // for ( let i = 0; i )

//     a = a.split("");
//     b = b.split("");
  
//     const aLen = a.length;
//     const bLen = b.length;
  
//     let i = 0;
//     let j = 0;
//     let resultOutput = "";
    
//     console.log(tie(i, j, ));
//     // Checks the next steps and returns how much should be cut from the winner array
//     // Also stops counting if there are matches but they arn't equal to the initial character .
//     function tie(_i, _j, char) {
//         let result = "a";
//         let loops = 0;
//         let allEqual = true;
//         console.log(result);
//     }
//     //   while (true) {
//     //     _i++;
//     //     _j++;
//     //     if (allEqual) loops++;
  
//     //     if (_i > aLen) {
//     //       result = "b";
//     //       break;
//     //     }
//     //     if (_j > bLen) {
//     //       result = "a";
//     //       break;
//     //     }
//     //     const _a = a[_i];
//     //     const _b = b[_j];
//     //     if (_a < _b) {
//     //       result = "a";
//     //       break;
//     //     }
//     //     if (_a > _b) {
//     //       result = "b";
//     //       break;
//     //     }
//     //     if (_a !== char) allEqual = false;
//     //   }
      
//     //   return { win: result, length: loops };
      
//     // }
  
    
//     // while (true) {
//     //   if (i >= aLen && j >= bLen) break;
  
//     //   const _a = a[i];
//     //   const _b = b[j];
  
//     //   if (_a === _b) {
//     //     const res = tie(i, j, _a);
  
//     //     if (res.win === "a") {
//     //       resultOutput += a.slice(i, i + res.length).join("");
//     //       i += res.length;
//     //     } else {
//     //       resultOutput += b.slice(j, j + res.length).join("");
//     //       j += res.length;
//     //     }
//     //   } else if (_a < _b || !_b) {
//     //     if (_a) {
//     //       resultOutput += _a;
//     //     }
//     //     i++;
//     //   } else if (_a > _b || !_a) {
//     //     if (_b) {
//     //       resultOutput += _b;
//     //     }
//     //     j++;
//     //   }
//     // }
  
//     // return resultOutput;
// };


// HackerRank - Morgan and a String
// ====================================

// let a = "JACK";
// let b = "DANIEL";

// console.log(morganAndString(a, b));

// function morganAndString(a, b) {


//     function* morgan(a, b) {
 
//         a += 'z'; 
//         b += 'z'; 
        
//         function* range(n) {
//             let j = 0;
//             let i = 0;
//             while( i++ < n)
//                 yield j++
//         };


//         // console.log(a, b);
//         for (let element of range(a.length + b.length - 2)){
//             console.log(a, b);

//             if (a < b) {  // J = 74 // D = 68
//                 yield a[0]
//                 a = a.substr(1)
                
//             } 
//             else {
//                 yield b[0]
//                 b = b.substr(1)
//             }
//         }
        
//     }
// let newArray = [...morgan(a,b)]
//     return newArray.join('')
// };

// // let a = "JACK";
// // let b = "DANIEL";


// // console.log(morganAndStringSaqib(a, b));

// function morganAndStringSaqib ( a, b) {

//     function* morgan (a,b){
//         a += 'z'
//         b += 'z'

//         function* range (n){
//             let j = 0;
//             let i = 0
//             while ( i++ < n){
//                 yield j++;
//             }
//         }

//         for ( let el of range( a.length + b.length - 2 )){
//             if ( a < b ){
//                 yield a[0]
//                 a = a.substr(1)
//             } else {
//                 yield b[0]
//                 b = b.substr(1)
//             }
//         }
        
//     }

//     let resultArray = [...morgan( a, b )]
//     return resultArray.join('');


// };

let a = 'JACK'
let b = "DANIEL";
// console.log(morganAndStringShortEasy(a, b))

function morganAndStringShortEasy(a, b) { 

    var output = "";
    cal(a,b);
    
    
    function cal(a, b) {
        if (a.length == 0 && b.length == 1)  {
            for (i = 0; i < b.length; i++) {
                output += b[i];
            }
        }
        else if (b.length == 0) {
            for (i = 0; i < a.length; i++) {
                output += a[i];
            }
        }

        else if (a.length > 0 && a[0] <= b[0]) {
            
            output += a[0]
            a = a.substr(1);
            cal(a, b)
        } else { 
            output += b[0]
            b = b.substr(1);
            cal(a, b)
        }
    }
    
    return output;

}



// HackerRank - Breaking Records 
//================================

// let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

// function breakRecords(scores) {
//     let h = [scores[0]];
//     let l = [scores[0]];

//     scores.forEach(e => {
//         if (e > h[h.length - 1])  h.push (e);
//         if (e < l[l.length - 1]) l.push (e);

//     });
    
//     // console.log(h);
//     // console.log(l);
//     return [h.length - 1, l.length - 1]
// }

// console.log(breakRecords(scores));

// hackerRank - Day of the Programmer
//==================================

let year = 1917;
// 1915 == 13

console.log(dayOfProgrammer(year))

function dayOfProgrammer(year) {

    let sumOfFirst8Months = 0;
    let dd = 0;
    let date = '';
    
    if ( year < 1918 && year % 4 === 0 ){
        
        sumOfFirst8Months = 244;
        dd = 256 - sumOfFirst8Months;
    }
    else if ( year < 1918 ){
        
        sumOfFirst8Months = 243;
        dd = 256 - sumOfFirst8Months;
        console.log(dd);
    }
    else if(year === 1918){
        sumOfFirst8Months = 244 - 14;
        dd = 256 - sumOfFirst8Months;
    }
    else if ( ( year >= 1917 ) && year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ){
        
        sumOfFirst8Months = 244;
        dd = 256 - sumOfFirst8Months;      
    }
    else  if ( year >= 1917 ) {
        sumOfFirst8Months = 243;
        dd = 256 - sumOfFirst8Months;       
    }
    date = `${dd}.09.${year}`;
    return (date);
}