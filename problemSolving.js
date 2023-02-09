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

// let password = 'aaaaa';
// let n = password.length;

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

// let a = 'JACK'
// let b = "DANIEL";
// // console.log(morganAndStringShortEasy(a, b))

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

// console.log(dayOfProgrammer(year))

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
    };

    date = `${dd}.09.${year}`;
    return (date);
};


// HackerRank - Bill Division
//==================================

// let bill = [ 3, 10, 2, 9];

// let k = 1
// b = 12
// // console.log(bill [k]);
// bill.splice (k, 1)

// const sum = bill.reduce((a,b) => a+b)

// // console.log(sum);

// const amount = sum/2
// // console.log(amount);

// if ( amount === b ){
//     console.log('Bon Appetit');
// } else {
//     console.log(b - amount);
// };


// HackerRank Ex - Sales by Match
//================================

// let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// let n = ar.length;
// let newArray = [];
// ar.sort();
//     var pairsCount = 0;
    
//     for ( let i = 0; i < n; i++)
//         if (ar[i] == ar[i+1]){
//             i++;
//             pairsCount++;
//         }
        
    
// console.log(pairsCount);

// HackerRank Ex - Drawing Book
//================================


// let n = 6; // Number of pages
// let p = 2; // page number to turn to

// const totalTurns = Math.floor(n/2); // 3
// const pageTurn = Math.floor(p/2); 

// console.log(Math.min(totalTurns-pageTurn, pageTurn));


// HackerRank Ex - Counting Valleys
//================================

function countingValleys(steps, path) {
    let currentLevel = 0;
    let valleysCount = 0;
    let seaLevel = 0;
    
    path = path.split('');
    
    for ( let i = 0; i < steps; i++){
        if ( path[i] == "U"){
            currentLevel++;
            if ( currentLevel == seaLevel){
                valleysCount++;
            }
        } else {
            currentLevel--
        }
    }
    return valleysCount;
};

// Traversing the matrix layer 
//============================
            //   i    i   i   i
            //   c    c   c   c
// let mat = [
//             [ 1,  2 ,  3 , 4],       // r = j
//             [12, 'A', 'B', 5],       // r = j
//             [11, 'D', 'C', 6],       // r = j 
//             [10,  9 ,  8 , 7]        // r = j
//         ];


// let l = [];
// let tr = [];

// let row = mat.length;
// let col = mat[0].length;
// let layer = Math.min( row, col ) / 2;

// for ( let i = 0; i < layer ; i++ ){
//     l = [];
//     for ( let j = i ; j < row - i - 1; j++ ){
//         l.push (mat[i][j]);
//     }
//     for ( let j = i; j < col -i -1; j++){
//         l.push (mat[j][col -i -1])
//     }
//     for ( let j = col -1 -i; j > i; j--){
//         l.push (mat[row -1 -i][j])
//     }
//     for ( let j = row -1 -i; j >i; j--) {
//         l.push ( mat[j][i])
//     }
//     tr.push(l)
// }

// console.log(tr);

// HackerRank Ex - Big Sorting
//============================

// when numbers are in string in array then use this technique

let unsorted = ['1', '3', '10', '3', '5' ];


// function bigSorting(unsorted) {
//     return unsorted.sort((a, b)=> Number(BigInt(a)-BigInt(b)))
// };


// HackerRank Ex - Electronics Shop
//=================================

// let b = 20;
// let keyboards = [4];
// let drives = [5];

function getMoneySpent(keyboards, drives, b) {
    let sum = [];
for ( let i = 0; i < keyboards.length ; i++)
    for ( let j = 0; j < drives.length ; j++){
         let cost = keyboards[i] + drives[j];
         if ( cost < b ) sum.push(cost)
         
        }
        
        if( sum.length === 0 ) {
            return -1
        }
    
        else  return Math.max(...sum);
}

// console.log(getMoneySpent(keyboards, drives, b));



// HackerRank Ex - Cats and a Mouse
// =================================

// console.log(catAndMouse(5,5,4));

// function catAndMouse(x, y, z) {

//     let catAdist = Math.abs(z - x);
//     let catBdist = Math.abs(z - y);

//     // console.log(catAdist, catBdist );

//     if ( catAdist > catBdist )
//     return 'Cat B'
//     else if ( catAdist < catBdist )
//     return 'Cat A'
//     else return "Mouse C"



// }

// HackerRank Ex - Designer PDF Viewer
// ===================================

// let h = [
//     1, 3, 1, 3, 1, 4, 1, 3,
//     2, 5, 5, 5, 5, 5, 5, 5,
//     5, 5, 5, 5, 5, 5, 5, 5,
//     5, 5
//   ]
// let word = 'abd'; // 9

// console.log(designerPdfViewer (h, word));
function designerPdfViewer(h, word) {

    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let wordIndex = [];

    for ( let i = 0; i < word.length ; i++){  
            wordIndex.push(alphabets.indexOf(word[i]));         
        }
        console.log(wordIndex);

    let heightsEachLetter = [];

    for ( let i = 0; i < wordIndex.length ; i++){
        heightsEachLetter.push(h[wordIndex[i]]);
        };
    
    return Math.max(...heightsEachLetter) * word.length;
}

// HackerRank Ex - Find Digits
// ===========================

// let n = 10;

// console.log(findDigits(n));

// console.log(n);
function findDigits(n) {
    let nn= n.toString().split('')
    let count = 0
    
    for ( let i = 0; i <= nn.length; i++){
        if (n % nn[i] == 0){
            count++; 
            
        }
    }
    return count
};


// HackerRank Ex - Climbing the Leaderboard
// ========================================

let ranked = [100,90,90,80];
let player = [40,90,105];


// console.log(climbingLeaderboard(ranked, player));

function climbingLeaderboard(ranked, player) {
    const ranks = [...new Set(ranked)];
    console.log(ranks);
    // const result = [];
    // let j = ranks.length - 1;
  
    // for (let i in player) {
    //   while (ranks[j] <= player[i]) {
    //     j--;
    //   }
      
    //   result.push(j + 2);
    // }
  
    // return result;
}


// HackerRank Ex - Two Strings
// ===========================

let s1 = 'abc';
let s2 = 'world';

let a = new Set(s1);
    let b = new Set(s2);

    for (const letter of b) {
        if (a.has(letter)) {
            console.log("YES");
        }
    }
    // console.log("NO");


// HackerRank Ex - Triple sum
// ==========================

// a = [1,4,5];
// b = [2,3,3];
// c = [1,2,3];

// a = [...new Set (a)].sort();
// b = [...new Set (b)].sort();
// c = [...new Set (c)].sort();

// let tripletsCount = 0;
//     let tripletsArray = []
// let lena = a.length; lenb = b.length; lenc = c.length;

//     for ( let i = 0; i < lena ; i++ ) {
//         for ( let j = 0; j < lenb ; j++ ) {
//             for ( let k = 0; k < lenc ; k++ ) {
//                 tripletsArray.push([a[i], b[j], c[k]])
//             }
//         }
//     }

//     for ( let i = 0; i < tripletsArray.length ; i++ ) {
//             if ( tripletsArray[i][0] <= tripletsArray[i][1] && tripletsArray[i][1] >= tripletsArray[i][2] ){
//                 tripletsCount++;

//             }
       
//         }


//     console.log(tripletsCount);
//     console.log(tripletsArray);

// let kachra = [2,3,5,8,9,0,98,8,76,5,4,5]

// let newKachra = kachra.splice(4, kachra.length)

// console.log(kachra)


a = [1,4,5];
b = [2,3, 3];
c = [1,2,3];

a = [...new Set (a)];
b = [...new Set (b)];
c = [...new Set (c)];

let tripletsCount = 0;
    let tripletsArray = []
let lena = a.length; lenb = b.length; lenc = c.length;

    for ( let i = 0; i < lena ; i++ ) {
        for ( let j = 0; j < lenb ; j++ ) {
            for ( let k = 0; k < lenc ; k++ ) {
                // tripletsArray.push([a[i], b[j], c[k]])
                if ( a[i] <= b[j] && b[j] >= c[k] ){
                    tripletsCount++;
                    // console.log(tripletsArray[i]);
                }
            }
        }
    }

    // for ( let i = 0; i < tripletsArray.length ; i++ ) {
    //         if ( tripletsArray[i][0] <= tripletsArray[i][1] && tripletsArray[i][1] >= tripletsArray[i][2] ){
    //             tripletsCount++;

    //         }
       
    //     }


    // console.log(tripletsCount);
    // console.log(tripletsArray);



// HackerRank Ex - Caesar Cipher
// =============================

let lowerAlp = `abcdefghijklmnopqrstuvwxyz`;
s = `There's-a-starman-waiting-in-the-sky`;
let newString = ''
let k = 3;
    
    for ( let i = 0; i < s.length; i++) {
        var code = s[i].charCodeAt(0) ;
        if ( (code >= 65 && code <= 90)) {
            code = ( (code - 65 + k) % 26 + 65 )
        } else if ( code >= 97 && code <= 122) {
            code = ( (code - 97 + k) % 26 + 97 )
        }
        newString += String.fromCharCode(code)
    }

// return newString;



// HackerRank Ex - Repeated String
// =============================== 


s = 'baba'
n = 10

// console.log(repeatedString(s, n))
function repeatedString (s, n) {
    s = s.split ('')
    
    if (!s.includes('a')) return 0;

    if (s.length === 1) return n;

    let count = 0;
    s.forEach ( val => {
        if (val === 'a')
        count++
    }) 

    let remaining = parseInt(n/s.length); // Math.floor(n/s.length)
    count = count * remaining

    let odd = n % s.length;
    for ( i = 0; i < odd; i++) {
        if (s[i] === 'a') {
            count++
        }
    }
    return count
};



// HackerRank Exercise - The Hurdle Race
// =====================================

height = [ 1,2,3,3,2 ];
k = 4

// console.log( hurdleRace (k, height) );

function hurdleRace(k, height) {
    let maxHeight = Math.max(...height)

    return k < maxHeight ? maxHeight-k : 0

};


// HackerRank Exercise - Utopian Tree
// ==================================

n = 10

function utopianTree(n) {
    let height = 1;
    for ( let i = 1; i <= n; i++ ) {
        if ( n === 0 ) return height;
        if ( i % 2 !== 0 ) height = height*2;
        if ( i % 2 === 0 ) height = height + 1;      
    }
    return height
}

// console.log(utopianTree(n));

// HackerRank Exercise - Angry Professor
// =====================================

a = [-1, -3, 4, 2];
k = 3 // cancellation threshhold


// console.log(angryProfessor(k, a));

function angryProfessor(k, a) {
    return (a.filter(a=> a<= 0).length < k) ? "YES" : "NO"
};


// HackerRank Exercise - Beautiful Days at the Movies
// ==================================================
i = 20; 2
j = 23; 32
k = 6;

// console.log(beautifulDays(i, j, k));

function beautifulDays(i, j, k) {
    let daysCount = 0;

    for ( let start = i; start <= j; start++ ) {
            // console.log(start, parseInt(String(start).split("").reverse().join('')), 
            // "Logic ", Math.abs(start - parseInt(String(start).split("").reverse().join('')))%k);
        if(Math.abs((start - parseInt(String(start).split("").reverse().join('')))%k) === 0) {
            daysCount++
            console.log(start);
        };
    }  
    return daysCount 
}


// HackerRank Exercise - Equalize the Array
// ========================================



arr = [1, 2, 3, 1, 2, 3, 3, 3]

// console.log(equalizeArray(arr))

function equalizeArray(arr) {
    let common = [...new Set(arr)] //1 2
    let deletions = []
    for ( const i of common ){
        deletions.push (arr.filter ( (value) => value !== i ).length)
    };
    
    return Math.min(...deletions)
}


// HackerRank Exercise - Viral Advertising
// =======================================

n = 5;
// console.log( viralAdvertising(n) );d

function viralAdvertising(n) {

    let shared = 5;
    let likes = Math.floor(shared/2)
    let totalLikes = likes

    if ( n === 1) {
        console.log( totalLikes );
    } else {
        for ( let days = 2; days <= n; days++) {
            shared = likes * 3;

            likes = Math.floor(shared/2)
 
            totalLikes = totalLikes + likes

        }
        return totalLikes
    }
};


// HackerRank Exercise - Save the Prisoner!
// ======================================== 

let m = 6; // No. of Candies
s = 2;     // started from

// console.log(saveThePrisoner(n, m, s));

function saveThePrisoner(n, m, s) {
    return ((m % n) + (s - 1)) % n || n
}



// HackerRank Exercise - Cut the sticks
// ====================================
arr = [ 1, 2, 3 ];

var lengthArray = []

while ( arr.length != 0 ) {

    var min = Math.min (...arr) 
    lengthArray.push(arr.length)

    for ( let i = 0; i < arr.length ; i++ ) {

        let sub = arr[i] - min 

        if ( sub === 0 ){
        arr.splice(i, 1)
        i--;
    }else {
        arr[i] = sub
    }
}
}

// console.log(lengthArray);


// HackerRank Exercise - Beautiful Triplets
// ========================================

let btArr = [2,2,3,4,5];
let d = 1;

// console.log(beautifulTriplets(d, btArr));

function beautifulTriplets(d, arr) {
    // let output = 0;
    // for ( let i = 0; i < arr.length; i++ )
    //     for ( let j = i + 1; j < arr.length; j++ )
    //         for ( let k = j + 1; k < arr.length; k++ )
    //             if(arr[k] - arr[j] === d && arr[j] - arr[i] === d){
    //                 output++
    //             }
    // return output

    // let result = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     const numb1 = arr[i] - d;
    //     const numb2 = numb1 - d;
    //     if (arr.includes(numb1) && arr.includes(numb2)) {
    //         result += 1;
    //     }
    // }
    // return result;
    // let result = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) {
    //         console.log((arr[i] + d) ,(arr[i] + d * 2))
    //     }

        
    // }
    // // return result

    return arr.filter ( val => arr.includes(val + d) && arr.includes(val + d * 2)).length;
}



// HackerRank Exercise - Encryption
// ================================

s = "haveaniceday"
// console.log( encryption(s) );

function encryption(s) {
    
    let noSpace = s.replace(/\s/g, '');
    let rows = Math.floor(Math.sqrt(noSpace.length));
    let col = Math.ceil(Math.sqrt(noSpace.length));

    if ( rows * col < noSpace.length ) rows++;

    var encrypted = "";
    for ( let i = 0; i < col; i++ ) {                                                                        
        let jump = 0;
        while ( i + jump < noSpace.length ) {
            encrypted += noSpace[i + jump];
            jump += col;    
        }
        encrypted += " ";
    }
    return encrypted
};


// HackerRank Exercise - Circular Array Rotation
// =============================================

a = [ 3, 4, 5 ];
k = 2;
let queries = [1,2]

// console.log(circularArrayRotation(a, k, queries));

function circularArrayRotation(a, k, queries) {
for ( let i = 0; i < k; i++ ) {  
    a.unshift(a.pop())
}
let ar = [];
for ( let i = 0; i < queries.length; i++ ) {
ar.push(a[queries[i]])
}
return ar
};



// HackerRank Exercise - ACM ICPC Team
// ===================================

let topic = ['10101', 
              '11100', 
              '11010', 
              '00101'];

// console.log(acmTeam(topic));

function acmTeam(topic) {
    let arr = []

    for ( let i = 0 ; i < topic.length - 1 ; i++ ) {
        for ( let j = i + 1; j < topic.length; j++ ) {
            let count = 0;
            for ( let k = 0; k < topic[0].length; k++ ) {
                if ( topic [i][k] === '1' || topic[j][k] === '1')
                count++;
            }
            arr.push(count)
        }
    }
   // arr = [4, 5, 3, 4, 4, 5]
   const max = arr.sort ((a,b) => b-a)[0];
   let count = 0;
   for ( let i of arr ) if ( i === max ) count++
   

   return [max, count]
};


// HackerRank Exercise - Append and Delete
// =======================================

s = 'y';
t = 'yu';
k = 2;

// s = s.split('')
// s.pop()
// console.log(s);
console.log(appendAndDelete(s, t, k));

function appendAndDelete(s, t, k) {
    if ( k >= s.length + t.length ){
        return 'Yes'
    } else {
        let newString = ""
        for ( let i = 0; i < s.length; i++ ) {
            if ( s[i] === t[i] ) {
                newString += s[i]
            } else break;

            }
        return ((s.length - newString.length) + (t.length - newString.length) <= k )? 'Yes' : 'No'

        
    }
}
