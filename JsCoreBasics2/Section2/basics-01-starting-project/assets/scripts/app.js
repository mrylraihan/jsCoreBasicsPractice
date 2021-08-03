const defautResult = 0;
let currentResult = defautResult;

function add(){
    const calcDescription = `${currentResult} + ${userInput.value}`
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

