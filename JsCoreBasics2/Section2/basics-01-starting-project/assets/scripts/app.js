//how to create a function in Js
// function greetUser(name){
// console.log(`hey user your name is ${name} am i right`)
// }

// greetUser('Wayel');

//these variables have global scope 
const defautResult = 0;

let currentResult = defautResult;

function add(num1, num2){
    const result = num1 + num2;
    return result;
}

currentResult = add(5, 9);

let calculationDescription = `${defautResult} + 5 + 5`;

outputResult(currentResult, calculationDescription);

