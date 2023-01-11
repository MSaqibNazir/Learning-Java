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
// console.log (joined);

const message = 'This is my first message.'
const parts = message.split(' ');
// console.log(parts);

const joinedParts = parts.join('-')
// console.log(joinedParts); // it isused for Url Slugs


// Sorting Arrays
const number = [2, 3, 1];

number.sort()
// console.log(number);

number.reverse()
// console.log(number); 

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
// console.log(courses);

// testing the elements of an array


// numbers = [1,2,3,4];

const allValuesPositive = numbers.every(value => value >= 0);
// console.log(allValuesPositive);

numbers.splice (1, 0 , -1);
// console.log(numbers); //  [1, -1, 2, 3, 4]

const atLeastOnePositive = numbers.some(value => value >= 0);

// console.log(atLeastOnePositive);


// Filtering the Arrays
// numbers = [1, -1, 2, 3, 4]

const filtered = numbers.filter(n => n >= 0);
//.......................filter number where number is greater than 0

// console.log('Filtered positive numbers are',filtered);

///=======================================================================


//MAPPING AN ARRAY

// let numbers = [1, -1, 2, 3, 4]
// const filtered = numbers.filter(n => n >= 0);

// to map elements of an array inn in something

const items = filtered.map(n => '<li>' + n + '</li>');

// console.log (items)

let html = '<ul>' + items.join('') + '</ul>'

// console.log(html);





////// if i want to map an object in array,, do this

// let numbers = [1, -1, 2, 3, 4]

// const filtered = numbers.filter( n => n >= 0);

// const value2 = filtered.map(n => ({ value : n}))
filtered.map(function (value){
    const obj : {value2 = n}
})

console.log(value2);