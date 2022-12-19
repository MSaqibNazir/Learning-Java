// Lecture of FizzBuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 5 and 3 => FizzBuzz
// Not Disible by both 3 & 5 => same Input
// Not a number => "Not a number"
// Boolean value => 'Not a number'





const output = fizzBuzz(7);
console.log(output);

function fizzBuzz (input){
    if (typeof input !== 'number')
        return 'Not a number';
    
    if ( (input % 2 === 0) && (input % 3 === 0))
        return 'FizzBuzz'
    
    if ( input % 2 === 0 )
    return 'Fizz';

    if ( input % 3 === 0 )
    return 'Buzz';

    
    return input;
}
