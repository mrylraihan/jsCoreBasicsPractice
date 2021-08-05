//how to create a function in Js
// function greetUser(name){
// console.log(`hey user your name is ${name} am i right`)
// }

// greetUser('Wayel');

//these variables have global scope
const defautResult = 0;
let currentResult = defautResult;
let logEntries = [];

function addToLog(enteredValue) {
  logEntries.push(enteredValue);
  console.log(logEntries);
  return logEntries;
}

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(oper, prevRes, newRes) {
  const calcDescription = `${prevRes} ${oper} ${newRes}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const previousResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", previousResult, currentResult);
  const logEntry = {
    operation: "ADD",
    prevResult: previousResult,
    number: enteredNumber,
    result: currentResult,
  };
  addToLog(logEntry);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const previousResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", previousResult, currentResult);
  const logEntry = {
    operation: "SUBTRACT",
    prevResult: previousResult,
    number: enteredNumber,
    result: currentResult,
  };
  addToLog(logEntry);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const previousResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", previousResult, currentResult);
  const logEntry = {
    operation: "MULTIPLY",
    prevResult: previousResult,
    number: enteredNumber,
    result: currentResult,
  };
  addToLog(logEntry);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const previousResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", previousResult, currentResult);
  const logEntry = {
    operation: "DIVIDE",
    prevResult: previousResult,
    number: enteredNumber,
    result: currentResult,
  };
  addToLog(logEntry);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
