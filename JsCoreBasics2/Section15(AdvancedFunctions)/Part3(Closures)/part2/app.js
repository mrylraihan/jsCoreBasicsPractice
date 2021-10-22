//Closures 
//If a function reference data outside of its own scope like from
// the global environment or an outer function that leaves us with an open 
//expression reference other free variables outside its environment 

//Example 1 outside variable in global environment
const name = 'wallie'

    function sayName (){
        console.log(name);//referencing the variable name outside the
        //function
    }
sayName();//wallie

//Example 2 outside in the outer function 
function outer (){
    const name1 = 'Wayel';

    function inner(){
        console.log(name1);//referencing variable in outer function
    }

    inner();
}

outer();// Wayel


