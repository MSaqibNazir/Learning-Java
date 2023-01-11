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
    console.log(count);
}



