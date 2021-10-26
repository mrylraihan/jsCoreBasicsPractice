//Closures 
//If a function reference data outside of its own scope like from
// the global environment or an outer function that leaves us with an open 
//expression reference other free variables outside its environment 

//Example 1 outside variable in global environment
let name = 'wallie'

    function sayName (lastname){
        return name + " " + lastname;//referencing the variable name outside
    }
const fullName = sayName('Raihan');//wallie
console.log(fullName);//wallie Raihan

name = "Wayel";
const fullName1 = sayName('Raihan');

console.log(fullName1);//Wayel Raihan


// Example 2
name = 'Wayel'

function outer(lName) {
   const lastN = lName// this can be omitted and we just pss in the param in to the inner function  
   function inner() {
       console.log(name +" "+lastN);
   }
   return inner();
}

outer('Raihan');//Wayel Raihan


// Example 3
let test1 = 'test1';//global variable

function outer2(test2) {
    function inner2(test3) {
        return `${test1} ${test2} ${test3}`
    }
    return inner2;
}


const testing2 = outer2('test2');//pass in first param
const testing3 = testing2('test3');//pass in second param and takes global variable
console.log(testing3);//test1 test2 test3

// if we run this function again but change teh global variables value 
// the previous invoke functions will lock in its lexical environment and the new value will show up when we invoke the function again 

test1 = "Changed Test1";

const changedTest2 = outer2('changed Test2');
const changedTest3 = changedTest2('changed Test3');
console.log(changedTest3);//Changed Test1 changed Test2 changed Test3


// an easy way to see this 

 name = 'wallie'

function printName() {
    console.log(name);
}

printName();//wallie , if the method was invoked before the value change 
//it has no affect on it 

name = 'mike';
//but if the value was changed before the time you invoke your function 
// then it will reflect in the function 
printName();//mike