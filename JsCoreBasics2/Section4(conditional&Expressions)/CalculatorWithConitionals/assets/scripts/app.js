const defautResult = 0;
let currentResult = defautResult;
let logEntries = [];

//gets input from input fields and converts string to a number 
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);// from vendor file
}

//function that creates the log object and pushes it to our array logEntries
function writeToLog(operationIdentif, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operationIdentif,
    prevResult: prevResult,
    number: operationNum,
    result: newResult,
  };
  logEntries.push(logEntry);//push newly created log object to our array
  console.log(logEntries);
}
function calculateResult(calculationType){
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUB' &&
    calculationType !== 'MULTI' &&
    calculationType !== 'DIV' ||
    !enteredNumber
  ) {
    return;
  }
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUB') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  }else if (calculationType === 'DIV') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }else if (calculationType === 'MULTI') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  }
  createAndWriteOutput(mathOperator, initialResult, currentResult);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


function add() {
  calculateResult('ADD')
}

function subtract() {
  calculateResult('SUB')
}

function divide() {
  calculateResult('DIV')
}

function multiply() {
 calculateResult('MULTI')
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
