


// This is my first JavaScript Code!
// console.log('Hello World');

//================= VARIABLES =====================
let firstName = 'Saqib';
let lastName = 'Nazeer';

// console.log(firstName,lastName);


//================= CONSTANT =====================
//// if you want the value to be remain unchaged or same

const intrestRate = 0.3;
// console.log(intrestRate);




//====== Catagories of types of values that we can assign to variables ======
// 1. Primitive/Value types 2. Refrence Types

// Primitive/value Types
// =====================
// String, number, boolean, undefined, null

let name = 'Saqib'; //String Literal
let age = 30; // Number Literal
let approved = true; // Boolean Literal
let parrentName = undefined; 
let selectedOption = null;

// 2. Refrence Types
//==================
// Objects, Arrays, Functions

//Object

let person ={
    naam: 'Saqib Nazeer Naqshbandi',
    umer: 24,
    number: +923321308230
};
// console.log(person);


// Dot Notation
person.naam = 'Aaqib Nazeer';
// console.log(person.naam)

// Bracket Notation
let selection = 'namech';

person[selection] = 'Sumi';


console.log(person.namech);



//Arrays / is List of items / it is Object in Java proved by typeof comamnd

let selectedColors = ['Red', 'Green'];
selectedColors[2] = 'Blue';

console.log(selectedColors);
console.log(selectedColors.length);



// Function 
//===========
//1.. fundamental building blocks in java script / 
//2.. set of statements that[erform a task and calculate the values


// Performing Task Function // to log something on console
              //parameter
function greet(namePrefix, nameSuffix){
//    console.log('Hello World');
      console.log('Hello' +', ' + namePrefix +' '+ nameSuffix)
      //          concatination          //
};
     //Argument
greet('Haider Ali Shah', 'NALAIQ HAI');




// Calculating Value Function //
function square(numb){
    return numb * numb;
};
let firstCalculation = square(4)
console.log(firstCalculation);

//  OR  //
console.log(square(9));




///======= PRACTICE =======
// ==== 1
function addition(num1, num2){
    return num1 + num2;
};

console.log('The sum of num1 & num2 is = ' + addition(2,10));


// ==== 2

function subtraction(num3, num4){
    return num3 - num4;
};

console.log('The difference b/w num3 & num4 is = ' + subtraction(80,20));


// ==== 3
function multiplication(num5, num6){
    return num5*num6;
}

console.log( 'The product of 2 given numbers is = ' + multiplication(3, 6));