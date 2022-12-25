// Object Oriented Programming -- OOP
// the set of differet properties and function 
// the function inside an object is called Method

// Lets start

const pentagon = {
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

pentagon.draw(); // Method

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


function Pentagon (radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
};

const myCircle = new Pentagon(1);
// console.log(myCircle);

const myCircle2 = new Pentagon(3);
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
// console.log (cd) //10, becaus they are independant

// reference

let obj = {value : 30};

function increase(obj){
    obj.value++
};

increase(obj);
// console.log(obj); // 31


// ==============================================

// Enumerating properties of an object


const circle = {
    radius : 1,
    draw : function (){
        // console.log ('draw');
    }
};

// we can use for in loop for objects
// for (let key in circle )
    // console.log (key, circle[key]);

// we can use for of loop i.e use for arrays so that,

// for ( let key of circle )
    // console.log (key) // circle is not iterable

//solution

// for (let key of Object.keys(circle))
    // console.log(key)
    // radius
    // draw

//Similarly,
// for ( let entry of Object.entries(circle))
    // console.log(entry) // it gives set of property and its value
    // radius, 1
    // draw , f

// for checking the existence of properties in object,, use this

// if ( 'radius' in circle ) console.log ('yes') // yes


// by this we get all properties of an onject and copy it to another object

/// ==============/// =================== ///============

// Cloning an object

const cloneCircle ={
    radius : 1,
    color : 'red',
    draw : function (){
        console.log('draw');
    }
}

// now i m going to clone the properties of cloneCircle in to another one

// const another ={};
// for ( let key in cloneCircle )
//     another[key] = cloneCircle[key]
// it is the old way to copy properties i=of an onject to another object

// New ways are as under

const another = Object.assign({
    size: "small"
}, cloneCircle);

// spread operator
const another1 = {...cloneCircle};

// both methods are used to copy the properties...

// console.log (another);s

// BUILY IN OBJECTS
//==================================


// Math // Google
// String ( Properties ) // Google
// Template Literals

const userName = "Aaqib";

const message =
`"Hi ${userName} ${5 + 2},

Thanks for contacting us.

Regards,
Saqib"`


// Date

const now = new Date();
console.log(now.toTimeString())