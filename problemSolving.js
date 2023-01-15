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


let s = [2,2,1,3,2];
let d = 4;
let m = 2;

const hacker = getWays(s,d,m)
console.log ( hacker )


function getWays(s, d, m){
   let i = 0;
   let j = m;
   let count = 0;

   for( let i = 0; i < m; i++){
    console.log (s[i])
   }
}