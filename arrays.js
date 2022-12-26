// New Section - Arrays

// Adding elements in an array 
const numbers = [3, 4];

// End
// Bigenning
// Middle

// END
numbers.push (5, 6)

// BIGENNING

numbers.unshift (1, 2)

// MIDDLE
// numbers.splice(index, delete else, add el)
numbers.splice(2, 0, 1, 'b')
console.log(numbers);

//Finding Elements in an array - Primitives

// const numbers = [1, 2, 1, 'b', 3, 4, 5, 6]

console.log(numbers.indexOf(1)); //0 // it tells the first coming given element
console.log(numbers.lastIndexOf(1)); // 2 // it tells the last coming given element

// if the given element is not present in the array, it will return -1

console.log(numbers.indexOf('c')); // -1

// to get boolean answer

console.log(numbers.indexOf(3) !== -1); // gives true/false // its ugly
console.log(numbers.includes('b')); // gives true /false // best way for the same requirement

//Finding Elements in an array - Reference Types

const courses = [
    { id : 1, name: 'a'},
    { id : 2, name: 'b'},
];

//console.log ( courses.includes('a')); // it will return false, bcz it is not a primitive type, use following approach

const course = courses.find(function (course){
    return course.name === 'a';
    });

console.log(course);

// to check the index of reference type

const courseFind = courses.findIndex(function (course){
    return course.name === 'a'
})
console.log(courseFind);



// Arrow Function

// jub kisi method mein callup function lgyga to es6 k mutabiq hm arrow function lgayngy
// function ko remove kren , parameter k bad => lgayn
// agar single parameter hai us k brackets b hta den or return ko b hta den
// statement agr ek line ki hai to brackets hta den
const courseShort = courses.find(course => course.name === 'a');
// ============================= course goes to name of course equal to a

console.log(courseShort);

const courseFind2 = courses.findIndex(course => course.id === 2)
console.log(courseFind2);


// Removing Element

const evenNumber = [2,4,6,8]

//End
const removedLast = evenNumber.pop() // removes the last element
console.log(removedLast); //8
console.log(evenNumber);

//Bigenning
const removeFirst = evenNumber.shift() // removes the first element
console.log(evenNumber);
console.log(removeFirst); // 2


//Middle
const removeMid = evenNumber.splice(1, 1) //removes the desired element 
console.log(evenNumber); // remaining 4 & 6 mein sy 6 gyaa, 4 bacha
console.log(removeMid);

