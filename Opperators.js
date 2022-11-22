// IN Java we have 5 types of operators
// 1 Arithmetic
// 2 Assignment
// 3 Comparison
// 4 Logical
// 5 Bitwise

//////////////////////===============//////////////////////////

console.log("...................")  ;
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

console.log("...................")  ;
console.log("Assignment Operator")  
console.log("===================")  ;

let a = 10;

// (a++);
a = a + 1 // these 2 are same 
console.log(a);



let b = 100

// b = b + 50;
b += 50;
console.log(b); // 150

b = 4000

// b = b - 500;
b -= 500; // These 2 are same
console.log(b); // 3500


// b = b * 2;
b *= 2;
console.log(b); //7000


// b = b / 50; b /= 50 These 2 are same
b /= 50;
console.log(b); // 140


// b = b % 50; b %= 50;
b %= 50;
console.log(b); 2


//////////////////////===============//////////////////////////

console.log("...................")  ;
console.log("Comparison Operator")  //  It Gives TRUE OR FALSE
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

console.log("...................")  ;
console.log("Equality Operator") 
console.log("===================")  ;

////// Strict Equality ( It checks same on b0th sides Value + Type)
console.log(1 === 1); //true
console.log("1" === 1); // false bcz on left side it is string, and other is number

////// Lose Equality ( It checks only Value from left side )
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);
console.log(false == 1);



//////////////////////===============//////////////////////////

console.log("...................")  ;
console.log("Ternary Operator");
console.log("===================");

// If customers have more than 100 points, then
// they are "GOLD" customers, Otherwise
// they are "SILVER"  Customers.

let points = 110;

let customerType = points > 100 ? 'GOLD' : 'SILVER'
console.log(customerType);

points = 90;
type = points > 100 ? 'GOLD' : 'SILVER'
console.log(customerType)




//////////////////////===============//////////////////////////

console.log("...................")  ;
console.log("Logical Operator");
console.log("===================");

// Logical Operator AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true); // = true
console.log(false && true); // = false
console.log(false && false); // = false

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore ? 'TRUE' : 'FALSE'
console.log(eligibleForLoan);

let eligibleForLoan2 = highIncome && goodCreditScore;
console.log(eligibleForLoan2);