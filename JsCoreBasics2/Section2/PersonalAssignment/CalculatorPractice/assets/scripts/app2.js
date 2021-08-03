//how to create a function in Js
// function greetUser(name){
// console.log(`hey user your name is ${name} am i right`)
// }

// greetUser('Wayel');

//these variables have global scope 
const defautResult = 0;
let currentResult = defautResult;

function add(){
    const previousResult = currentResult;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, `${previousResult} + ${+userInput.value}`);
}

function subtract(){
    const previousResult = currentResult;
    currentResult = currentResult - parseInt(userInput.value);
    outputResult(currentResult, `${previousResult} - ${+userInput.value}`);
}

function multiply(){
    const previousResult = currentResult;
    currentResult = currentResult * parseInt(userInput.value);
    outputResult(currentResult, `${previousResult} * ${+userInput.value}`);
}

function divide(){
    const previousResult = currentResult;
    currentResult = currentResult / parseInt(userInput.value);
    outputResult(currentResult, `${previousResult} / ${+userInput.value}`);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);