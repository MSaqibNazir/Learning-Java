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