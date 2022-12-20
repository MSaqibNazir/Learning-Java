// EVEN ODD Separation exercise
// ===========================//

// MY WORK 
// =========

showNumbers(5)

function showNumbers(limit){
    for (let i = 0 ; i <= limit; i++){
        // if (i % 2 === 0) 
        //     console.log(i, 'EVEN')
        // else 
        //     console.log(i, "ODD")



        // a shorter way is this

        const message = (i % 2 === 0) ? 'EVEN' : "ODD"
        // console.log (i, message)
    }
};


// Exercise Count Truthy
// =========== //

const array = ["", 1, 10, undefined , 3, 4 , 0, null];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array)
        if (value) // is truthy, then,,;
        count++;
        return count;
}