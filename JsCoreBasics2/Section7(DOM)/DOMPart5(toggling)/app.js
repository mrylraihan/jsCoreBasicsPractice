const h1Ele = document.querySelector('h1');
// console.log(h1Ele.textContent);logs the text in the h1 element
const h1Change =document.getElementById('name')

h1Ele.textContent = 'Some new text!';//changes the text in the h1 element


const btn = document.getElementById('btn');
let buttonText;
const togglingtext = ()=>{
    
    if (!buttonText) {
        buttonText = true
        btn.textContent = `${buttonText}`;
        h1Change.textContent = 'Wallie';
    }else if (buttonText) {
        buttonText = false
        btn.textContent = `${buttonText}`;
        h1Change.textContent = 'shajan';
    }
}

btn.addEventListener('click', togglingtext)