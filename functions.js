// in javascript there are two ways to define functions


// declaring a function
// isy ham declaring sy pehly call kar sakty heinb
function walk (){
    console.log('walk')
}
// here we dont need ; (void)
// walk()
//  =======




// Anonymous Function Expression
// isy hm declaring sy pehly call ni kar sakty
let run = function(){
    console.log( 'run' );
}

let move = run

// run() 



//==========================
// Arguments

function sum(){
    let total = 0;
    for ( let value of arguments)
        total += value;
    return total;
}

// console.log(sum(1,3,58,6,3,6,4,0,10)); 

// if we have varrying number of parameters,  we use rest operators 

// REST Operators
//==============//

function sum (...args){   // a = accumulator // b = Current
    const total = args.reduce((a, b) => a + b );
    return total

}

// console.log ( sum(1,2,3,2,54,2,5,56,2,46,5) );


function sum (discount, ...prices){
    const total = prices.reduce((a, b) => a + b );    
    return total * (1 - discount) // to make,,, 100 - 10 == 90% price
}

// console.log ( sum(0.1, 100, 200, 500) ) // 10 percent discount

// default parameter

function interest ( principal, rate, years){
    return principal * rate / 100 * years;
}

// console.log(interest (10000, 4, 10));

function interest2 ( principal, rate, years){
    rate = rate || 4;
    years = years || 10
    return principal * rate / 100 * years;
}

// console.log(interest2 (10000, 4, 10));

// acc to es6, we can set the value in parameter as well
function interest3 ( principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}

// console.log(interest3 (10000));

function interest4 ( principal, rate = 3.5, years){
    return principal * rate / 100 * years;
}

// console.log(interest4 (10000, undefined, 20));

// ye ugly hai,,, is liye 3rd wala follow krna hai only
// default parameter ko function mein last mein lana chahye ,, takky us k arguments mein msla na ho

// done


//Getters and Setters//===========================
//=============================

person = {
     firstName : 'Saqib',
     lastName : 'Nazeer',
    //  fullName : function(){} // better and shorter and smarter way is this
    get fullName (){ // it is read only, we cannot update its value from outside
    return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1]
    }
};

person.fullName = 'Mudassir Iqbal'

// we use,
// Getters => to access the properties of an object
// Setters => to change or mutate that properstries which is selected with setter

// console.log(`${person.firstName} ${person.lastName}`);
// console.log(person);

newMainPerson = {
    name : 'Saleem',
    nisbatName : 'Rizvi',
    get completeName(){
        return `${newMainPerson.name} ${newMainPerson.nisbatName}`
    },

    set completeName(value){
        const  parts = value.split (' ')
        this.name = parts[0];
        this.nisbatName = parts[1];
    }
}

newMainPerson.completeName = 'Saqib Naqshbandi'

// console.log(newMainPerson);


/// TRY CATCH ERROR HANDLING
//===========================

user = {
    name : 'Saqib',
    lastName : 'Nazeer',
    set userName(value) {
        if (typeof value !== "string" ) 
        throw new Error ('Value is not a string.');
        // jb throw use krty hein toye exception kehlata hai
        // jab simple errror ko layngy to us ka mtlb error hoga,
        // error alag cheez hai,,, exception alag cheez hai
        // when we throw an exception, the lines after it wil not executed, jumps out of the mehtod / function
        // and control will move to the catch block ... catch (e){}

        const parts = value.split(' ');
        if (parts.length !== 2){
            throw new Error ('Please enter first name and last name.')
        }

        this.name = parts[0];
        this.lastName = parts[1]
    }
};

try{
    user.userName = 'Saqib Sumaiya'
}
catch (e){
    alert (e)
}

// console.log(user);

// This Keyword
//=================================================================================================================================
// what is this? this references the object that is excecuting the current function

// if that function is part of an object we called that function a method

// 1.. method -> object
    // if that function is a method in an object. 
        //this refrences that object itself

// 2.. function -> global obj (window, global)
    //  if that function is a regular function, it means it is not part of an object
       // this refrences to the golbal object which is (window ) object in browser and (global) object in node
 


//=============// 1.. method -> object // ================
video = {
    title : 'a',
    play() { // method
        // console.log(this); // refrences the object itself
    }
};

video.stop = function (){
    // console.log(this);
}
video.stop()



//=============// 2.. function -> global obj (window, global) // ================

function playVideo () {
    // console.log(this); // it will give global object i.e Window
}

playVideo()

function Video ( title , director ) {
    this.title = title;
    this.director = director;
    // console.log(this);
}

const v = new Video ('saqib', 'mustafa')

const audio = {
    title : 'Saqib',
    tags : ['a', 'b', 'c'],
    showTags ( ) {
        // this.tags.forEach( tag => console.log(tag))
        this.tags.forEach ( function (tag){
            console.log(this.title, tag)
        }, this )
    },

    showTagsAnother ( ) {
        // assign this to const so that it will reference the current object
        const self = this;

        this.tags.forEach ( function (tag){
            console.log(self.title, tag)
        })
    }
};

// audio.showTags();
// audio.showTagsAnother();


// Changing this
//=================================================================================================================================


// self = this
// calling bind method
// using arrow function

const blog = {
    title : 'a',
    posts : ['abc', 'xyz' , '123'],
    showPosts () {
        this.posts.forEach(post => {
            console.log(this.title, post)
        }) 
    }
}

// blog.showPosts();

// function playAudio(a, b) {
//     console.log(this);
// }

// playAudio.call({ name : 'Mosh'}, 1 ,2);
// playAudio.apply({name : 'Saqib Nazeer'}, [1,2]);
// // const fn = playAudio.bind({name : "Nazeer Ahmed"}) // it creats new function
// playAudio.bind({name : 'Mudassir'})();

// playAudio()


const number = [ 1, 2, 5, 3, 4, 5];

const  count = countOccurence (number, 5)

console.log(count);

function countOccurence (array, searchedElement) {
    return array.reduce (( accumulator, current ) => {
        const occurence = (current === searchedElement) ? 1 : 0
        return accumulator + occurence;
    })
}