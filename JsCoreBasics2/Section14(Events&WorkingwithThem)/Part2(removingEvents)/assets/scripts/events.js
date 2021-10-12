const buttons = document.querySelectorAll('button');

// button.onclick = function hello() {
//     console.log('hello!');
// }
//or

function hello() {
    console.log('hello!');
}

const removeEvent=()=>{
    buttons[0].removeEventListener('click', hello)//removes event listeners
}
const addEvent = ()=>{
    buttons[0].addEventListener('click', hello)
}

buttons[0].addEventListener('click', hello);


buttons[1].addEventListener('click', removeEvent)
buttons[1].addEventListener('dblclick', addEvent)
// or
