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


function Cirle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
};

const myCircle = new Cirle(1);
console.log(myCircle);

const myCircle2 = new Cirle(3);
console.log(myCircle2)
