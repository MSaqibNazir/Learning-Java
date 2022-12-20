// Speed Limit = 70
// 5 -> 1 point
// (Hint) Math.floor(1.3) => 1
// 12 Points -> Licence Suspended


// checkSpeed(890)
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed <= speedLimit) 
//     console.log('Great :). You are driving under limit speed.');

//     else{
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
        
//         if (points >= 12) console.log('Your lisence has been suspended due to over limit.');
//         else console.log( 'Points: ', points)
//     }

// }; 


checkSpeed(90)
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if( speed < speedLimit + kmPerPoint) {
        console.log( 'Good' );
        return;
    };

    let points = Math.floor(( speed - speedLimit ) / kmPerPoint);  

    if ( points >= 12)
     console.log ( 'Lisence suspended' )
    else 
    console.log ( 'Points:', points)

};