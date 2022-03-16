// https://www.youtube.com/watch?v=bD-62OMzni0
// Global Scope
var a = 20; // this will be placed on the window object/global scope 
// you can actually see it on the window object in the browser
let b = 40;//global context
const c = 50;//global context
function stuff(){
    return b
}


// Function Scope - in accessible from the outside of the function

function home(){
    let person = 'wallie'
    // this person variable is only defined in our function 
    // this person only lives here  
    return person
}

// console.log(person);

console.log(home());