const defautResult = 0;
let currentResult = defautResult;

function add(){
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);


