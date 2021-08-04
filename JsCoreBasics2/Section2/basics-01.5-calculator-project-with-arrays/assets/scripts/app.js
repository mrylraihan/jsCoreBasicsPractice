const defautResult = 0;
let currentResult = defautResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(usrInput.value)
}

function createAndWriteOutput(operator , resultBeforeCalc , calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+',initialResult, currentResult);
    const logEntry = {
        operation:'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult, currentResult);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*',initialResult, currentResult);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/',initialResult, currentResult);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
