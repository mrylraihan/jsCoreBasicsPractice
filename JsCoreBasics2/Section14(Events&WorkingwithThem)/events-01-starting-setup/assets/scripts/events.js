const buttons = document.querySelectorAll('button');

// button.onclick = function hello() {
//     console.log('hello!');
// }
//or

// function hello() {
//     console.log('hello!');
// }

// button.addEventListener('click', hello);

// or


const buttonClickHandler = (event)=>{
    event.target.disabled = true
    console.log(event);
};
const anotherButtonClickHandler = ()=>console.log('hello!');

// button.onclick = hello; not recommend 
//this is because it becomes hard to add more then one function as well as
//remove or control, witt addEventListener you can have fine control over it

const boundFn = buttonClickHandler.bind(this)

buttons.forEach(btn=>btn.addEventListener('click', buttonClickHandler))

// setTimeout(()=>{
//     buttons.removeEventListener('click', buttonClickHandler)//removes event listeners
// },2000)
