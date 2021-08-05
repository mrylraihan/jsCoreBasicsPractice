const defautResult = 0;
let currentResult = defautResult;
let logEntries = [];

function addToLog(enteredValue) {
  logEntries.push(enteredValue);
  console.log(logEntries);
  return logEntries;
}

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, currentResult);
  const logEntry = {
    operation: "ADD",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  addToLog(logEntry);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, currentResult);
  const logEntry = {
    operation: "SUBTRACT",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  addToLog(logEntry);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, currentResult);
  const logEntry = {
    operation: "MULTIPLY",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  addToLog(logEntry);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, currentResult);
  const logEntry = {
    operation: "DIVIDE",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  addToLog(logEntry);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
