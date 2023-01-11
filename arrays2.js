// Iterating an Array

//  for of loop

// const numbers = [1,-1,2,3,4]

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


numbA = [1,2,3,4];

const allValuesPositive = numbA.every(value => value >= 0);
// console.log(allValuesPositive);

numbA.splice (1, 0 , -1);
// console.log(numbers); //  [1, -1, 2, 3, 4]

const atLeastOnePositive = numbA.some(value => value >= 0);

// console.log(atLeastOnePositive);


// Filtering the Arrays
// numbers = [1, -1, 2, 3, 4]

// const filtered = numbers.filter(n => n >= 0);
//.......................filter number where number is greater than 0

// console.log('Filtered positive numbers are',filtered);

///=======================================================================


//MAPPING AN ARRAY
// using map we can map each element of an array in to something else

// let numbers = [1, -1, 2, 3, 4]
// const filtered = numbers.filter(n => n >= 0); we have an array of ppositive numbers

// construct an html  markup using the elements in this array
// n = number
// map this in to html markup

// const items = filtered.map(n => '<li>' + n + '</li>');
// console.log (items)
// each number is mapped in string

// to put this in ul element  we set this array in const i.e items

// agar join() lgauga ,, to default mein har element k baad , ayega it is called separator
// agr.. join('') lgauga,, to har element k bad empty space ajyag
// similarly mein join ('-') jo lggauga,,, wo elementd k beecg mein ajhayga

// const html = '<ul>' + items.join('') + '</ul>'

// console.log(html);





////// we can also map the elements of an array in objects

let numbers = [10, -1, 15, 4, 9]

const filtered = numbers.filter( n => n >= 0); // an array of positive integers

// const items = filtered.map( n => {
//     // const obj = {value : n}; 
//     // return obj; // yahan sy return hta dengy qk obj ki need ni hai. jutst object he return karaana hai to is liye just return use krna

//     return { value : n };
// });

//shorter ways is as under

const items = filtered.map ( n => ({value : n}));  // arrow function k liye object ko paranthesis mein rkhna hota ha

// these methods are chainable, which means we can call one after another in a chain

// console.log(items); 

// chaining mehtods
const shortItems = numbers
    .filter( n => n >= 0)
    .map(n => ({value : n})) // here map is creating a new array so we can use filter again on it
    .filter( obj => obj.value >= 10) // it will filter and give you the values which are greater than 10
    .map ( obj => obj.value );

console.log(shortItems);