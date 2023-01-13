// in javascript there are two ways to define functions


// declaring a function
// isy ham declaring sy pehly call kar sakty heinb
function walk (){
    console.log('walk')
}
// here we dont need ; (void)
// walk()
//  =======




// Anonymous Function Expression
// isy hm declaring sy pehly call ni kar sakty
let run = function(){
    console.log( 'run' );
}

let move = run

// run() 



//==========================
// Arguments

function sum(){
    let total = 0;
    for ( let value of arguments)
        total += value;
    return total;
}

// console.log(sum(1,3,58,6,3,6,4,0,10)); 

// if we have varrying number of parameters,  we use rest operators 

// REST Operators
//==============//

function sum (...args){           // accumulator // Current
    const total = args.reduce((a, b) => a + b );
    return total

}

console.log ( sum(1,2,3,2,54,2,5,56,2,46,5) );


function sum (discount, ...prices){
    const total = prices.reduce((a, b) => a + b );    
    return total * (1 - discount) // to make,,, 100 - 10 == 90% price
}

console.log ( sum(0.1, 100, 200, 500) ) // 10 percent discount

// default parameter

function interest ( principal, rate, years){
    return principal * rate / 100 * years;
}

console.log(interest (10000, 4, 10));

function interest2 ( principal, rate, years){
    rate = rate || 4;
    years = years || 10
    return principal * rate / 100 * years;
}

console.log(interest2 (10000, 4, 10));

// acc to es6, we can set the value in parameter as well
function interest3 ( principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}

console.log(interest3 (10000));

function interest4 ( principal, rate = 3.5, years){
    return principal * rate / 100 * years;
}

console.log(interest4 (10000, undefined, 20));