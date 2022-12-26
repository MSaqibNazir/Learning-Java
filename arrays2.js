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