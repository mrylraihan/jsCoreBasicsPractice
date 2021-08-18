// var = creates a variable in the fucntion and global scope
//let = creates a variable in the blockscope
//const = creates a constant in the block scope

let names = 'wallie';

function sayName(params) {
    console.log(params);
}

sayName(names);


function greet(names) {
    let age = 29;
    console.log(names+' '+age);
}

greet(names);
// console.log(age); this wont work because let is in the local scope of the function

function greetWithVar(params) {
    var nameVar = 'WR';
    nameVar = params
    console.log(nameVar);
}


greetWithVar('Wayel R')
// console.log(nameVar); wont work either because its declared in the function

var name1 = 'Wally';
var name1 = 'wolly';// with let or const you can redeclare a variable 
if (name1 === 'wolly') {
    var hobbies = ['coding', 'working out'];// because its var and this isnt a function 
    // it is in the global scope, if it was a let or const it would error
    console.log(hobbies);
}
function anotherGreeting() {
    var age1 = 30;
    var name1 = 'wly';
    hobbies.push('building keyboards')
    console.log(name1, age1, hobbies); // Also has access to hobbies due to var
}

anotherGreeting();
console.log(name1);//original value wolly, function doesnt affect it
console.log(hobbies);// this will log correctly because the variable is a var

//VAR
// var only knows global scope or function scope 
// a var created in a fucntion cant be used outside the function 
// var created in the global scope can be used everywhere

// excuction block 
{
    var test = 'test';
    console.log(test);
}
console.log(test);


const array1 = [1,2,3,4,5,6];

for (let index = 0; index < array1.length; index++) {
    console.log(array1[index]);
    
}
array1.push(7,8);

console.log(array1);

const popedValue = array1.pop();

console.log(popedValue);

