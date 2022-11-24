// Conditional Operators If... Else

// Like Greeting according to the current time

// If the Current time is between 6am & 12pm, that greet good morning
// If it is between 12pm to 6pm, then greet good afternoon
// Otherwise : Good Evening



// Basic Structure
// if (condition){
//     statements
// }
// else if (anothercondition){
//     statements
// }
// else if(yetanothercondition)
//     statement

// else
//     statement;

// Now Application of structure

// let hour = 10;
// hour = 15;
let hour = 21;
if (hour >=6 && hour <12){
    console.log("Good Morning!");
}
else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon!');
}
else console.log("Good Night!");



    