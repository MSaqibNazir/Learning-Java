function sum(...args){
    return args.reduce((a,b) => a + b)
}

// console.log ( sum(1,2,3,4) )

// array = [1,2,3,4];


function sum(...items){

    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a,b) => a + b)
}

// console.log ( sum([1,2,3,12,4]) );

// Exercise 2 Area of a circle
//=================================================================================================================================

const circle = {
    radius : 2,
    get area () {
        return Math.PI * this.radius * this.radius
    } // read Only, ecause here we have not a setter thats 
    // y we can not update it from outside
}
// console.log( 'Radius Of Circle',  circle.radius )

circle.area = 40;
// console.log( 'Area Of Circle',  circle.area )


// Exercise 3 Error handling
//=================================================================================================================================
try{
    const numberEx = [ 1, 2, 5, 3, 4, 5];
    
    const  count = countOccurence (null, 5)
    
    console.log(count);

}

catch (e) {
    console.log(e.message)
}

function countOccurence (array, searchedElement) {

    if (!Array.isArray(array))
        throw new Error ('Not a valid Array');
        
    return array.reduce (( accumulator, current ) => {
        const occurence = (current === searchedElement) ? 1 : 0
        return accumulator + occurence;
    }, 0)
}