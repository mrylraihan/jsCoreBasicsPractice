const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
    

const alerting = ()=>alert('Hey ' + userInput.value);
addBtn.addEventListener('click', alerting);