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
console.log(numbers.includes('b')); // best way for the same requirement

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

const courseFind = courses.findIndex(function (indexCourse){
    return indexCourse.name === 'b'
});

console.log(courseFind);
