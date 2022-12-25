// Object Oriented Programming -- OOP
// the set of differet properties and function 
// the function inside an object is called Method

// Lets start

const circle = {
    radius : 1,
    location : {
        x : 1,
        y: 2,
    },
    isVisible: true,
    draw: function () {
        // console.log('draw')
    }
};
// We can call the function of object as follow

circle.draw(); // Method

//================================================================================

// Factory Functions // => This factory produces objects
// function naming = camel notation = oneTwoThree

function createCircle (radius){
    return {
        radius, //=> radius : radius, // in modern java script if the key and value are the same,, then just use key,, it is the same
        
        draw(){
            // console.log('draw')
        }      
    }; 
};

const circle1 = createCircle(1);
// console.log(circle1);

const circle2 = createCircle(2);
// console.log(circle2);

//================================================================================
////// Another pattern for creating objects

// Constructor Function // THE job of this function is to create an object
//=====================

// function naming = Pascal notation = OneTwoThreeFour


function Circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
};

const myCircle = new Circle(1);
// console.log(myCircle);

const myCircle2 = new Circle(3);
// console.log(myCircle2);

//===================================

//Dynamic nature of objects

const sphere = {
    radius: 1
};

sphere.color = 'red';
sphere.draw = function(){};

delete sphere.color;
// delete sphere.draw;

// console.log( sphere )


// Fucntions are objects
// ======================

function Oval (radius){
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
};

Oval.call ({}, 1, 2, 3);
Oval.apply ({}, [1, 2, 3])
const anotherSphere = new Oval(1);


// Value      VS   Reference
// (Primitives)

// numbers     |    Objects
// string      |    Fucntions
// boolean     |    Arrays
// symbol 
// null 
// undefined 



//Primitives Type are copied by their Values
// Onjects/Reference Types are copied by thier reference

// Primitives/

let ab = 10;
let cd = ab;

ab = 20;
console.log (cd) //10, becaus they are independant

// reference

let obj = {value : 30};

function increase(obj){
    obj.value++
};

increase(obj)
console.log(obj); // 31