// IN Java we have 5 types of operators
// 1 Arithmetic
// 2 Assignment
// 3 Comparison
// 4 Logical
// 5 Bitwise

//////////////////////===============//////////////////////////

console.log("Arithmetic Operator")  ;
console.log("===================")  ;

let x = 9;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// Increament (++)
console.log(++x);

console.log(x++);
console.log(x);

// Decreament (--)
console.log(--y);

//////////////////////===============//////////////////////////

console.log("Assignment Operator")  
console.log("===================")  ;

let a = 10;

(a++);
a = a + 1 // these 2 are same 
console.log(a);



let b = 100

// b = b + 50;
b += 50;
console.log(b);


// b = b - 50;
b -= 50;
console.log(b);


// b = b * 50;
b *= 50;
console.log(b);


// b = b / 50;
b /= 50;
console.log(b);


// b = b % 50;
b %= 50;
console.log(b);


//////////////////////===============//////////////////////////

console.log("Comparison Operator")  
console.log("===================")  ;

let c = 2

// Relational
console.log(c > 1);
console.log(c >= 1);
console.log(c < 1);
console.log(c <= 1);

// Equality
console.log(c === 2);
console.log(c !== 1);

//////////////////////===============//////////////////////////

console.log("Equality Operator") 
console.log("===================")  ;

////// Strict Equality ( It checks same on b0th sides Value + Type)
console.log(1 === 1);
console.log("1" === 1);

////// Lose Equality ( It checks only Value from left side )
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);
console.log(false == 1);



//////////////////////===============//////////////////////////
console.log("Ternary Operator") 
console.log("===================")  ;

// If customers have more than 100 points, then
// they are "GOLD" customers, Otherwise
// they are "SILVER"  Customers.

let points = 110;

let type = points > 100 ? 'GOLD' : 'SILVER'
console.log(type);

points = 90;
type = points > 100 ? 'GOLD' : 'SILVER'
console.log(type)
