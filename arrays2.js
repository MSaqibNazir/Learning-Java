// Iterating an Array

//  for of loop

const numbers = [1,2,3,4]

// for (let number of numbers)
    // console.log(number) 

// numbers.forEach((index, number) => console.log(index, number )); 

// java ka apna method hai for each

/////////////// =======================

// Joining Arrays

const alphabets = [1,2,3,4];

const joined = alphabets.join(',');
console.log (joined);

const message = 'This is my first message.'
const parts = message.split(' ');
console.log(parts);

const joinedParts = parts.join('-')
console.log(joinedParts); // it isused for Url Slugs


// Sorting Arrays
const number = [2, 3, 1];

number.sort()
console.log(number);

number.reverse()
console.log(number);

const courses = [
    { id : 1, name : 'Node.js' },
    { id : 2, name : 'javascipt'}
];

courses.sort( function (a, b){
    // if a<b => -1
    // if a>b => 1
    // if a === b => 0

    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase()

    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0;

})
console.log(courses);

// testing the elements of an array


// numbers = [1,2,3,4];

const allValuesPositive = numbers.every(value => value >= 0);
console.log(allValuesPositive);

numbers.push (-1, 8);
console.log(numbers);

const atLeastOnePositive = numbers.some(value => value >= 0);

console.log(atLeastOnePositive);