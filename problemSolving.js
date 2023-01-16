/// Between Two Sets

let a = [2, 6];
let b = [24, 36];

// getTotalx(a, b)
function getTotalx(){
    let count = 0;

    for ( let x = 1; x <= 100 ; x++){
        if ( a.every (int => (x % int == 0))) {
            if (b.every (int => (int % x == 0))) {
                count++;
            }
        }                    
    };
    // return count;
    // console.log(count);
}






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

const ar= [1,3,2,6,1,2];
const k = 3;
let n = ar.length;

// divisibleSumPairs(n, k, ar)

// function divisibleSumPairs(n, k, ar) {
//     let pairsCount = 0;
    
   
    

// }


const prob = function divisibleSumPairs(n, k, ar) {
    var countOfPairs = 0

    for( let j = 0; j < n - 1; j++){
        for (let i = j + 1; i < n ; i++)
            if((ar[i] + ar[j]) % k === 0)
                countOfPairs++;
}
return countOfPairs;
}

console.log(prob)