const btn = document.querySelector('button');
const userInput = document.querySelector('input')
const h1 = document.querySelector('h1');

let userInputValue;

const gettingUserInput = () => {
	userInputValue = userInput.value;
	userInput.value = '';
    h1.innerText = userInputValue;
    h1.id = 'stuff';
}

btn.addEventListener('click',gettingUserInput);