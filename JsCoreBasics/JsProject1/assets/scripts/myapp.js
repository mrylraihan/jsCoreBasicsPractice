const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumber() {
     return parseInt(userInput.value);
}

//Generate and write calculation log
function createWritenOutput(operator, resultBeforCal, calcNumber) {
     const calDescription = `${resultBeforCal} ${operator} ${calcNumber}`;
     outputResult(currentResult, calDescription);// from vendor file
}
function writeToLog(operation, prevResult, inputtedNumber, newResult) {
     const logEntry = {
          operation: operation,
          prevResult: prevResult,
          inputtedNumber: inputtedNumber,
          newResult: newResult
     };
     logEntries.push(logEntry);
     console.log(logEntries);
}

function calculateResult(calculationType) {
     const enterNumber = getUserNumber();
     const initialResult = currentResult;
     let mathOperator;

     if (calculationType === 'Add') {
          currentResult += enterNumber;
          mathOperator = '+';
     } else if (calculationType === 'Sub') {
          currentResult -= enterNumber;
          mathOperator = '-';
     } else if (calculationType === 'Mult') {
          currentResult *= enterNumber;
          mathOperator = '*';
     } else if (calculationType === 'Div') {
          currentResult /= enterNumber;
          mathOperator = '/';
     }else{

     }

     createWritenOutput(mathOperator, initialResult, enterNumber);
     writeToLog(calculationType, initialResult, enterNumber, currentResult);
}
function cursing() {
     alert('fuck you !!!');
}


divideBtn.addEventListener('click', calculateResult.bind(this, 'Div'));
multiplyBtn.addEventListener('click',calculateResult.bind(this, 'Mult'));
subtractBtn.addEventListener('click',calculateResult.bind(this, 'Sub'));
addBtn.addEventListener('click',calculateResult.bind(this, 'Add'));

curseBtn.addEventListener('click', cursing)

