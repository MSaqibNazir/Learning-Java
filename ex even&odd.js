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

const array = [ '', 1, 2 , 0, undefined , 'SAQIB'];
// console.log(coutnTruthy(array));

function coutnTruthy(array){
    let count = 0;
    for ( let value of array )
        if(value)
        count++;
        return count;
    
};
let movie ={
    releaseYear : 2020,
    title : 'a',
    director : 'b',
    rating : 4.5

};

showProperties(movie);

function showProperties(obj){

    for ( let key in obj )
    if (typeof obj[key] === 'string')
    console.log (key, obj[key]);
}