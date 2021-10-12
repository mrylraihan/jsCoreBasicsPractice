const button = document.querySelector('button');

// button.onclick = function hello() {
//     console.log('hello!');
// }
//or

const name = 'wallie';
const buttonClickHandler = ()=> {
    alert('Button was clicked! ' + name);
}

const anotherButtonClickHandler = ()=>{
    console.log('This was clicked!');
}

// // the last event is what the button gets assigned
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;
// button.onclick = ''//how to remove an event with onclick
// // you can assign multi-events if the event is different, here we hav double click, 
// //doesn't override the previous event because its just one click 
// button.ondblclick = buttonClickHandler
// // ths issues with adding an event we can only add one at a time 

// with add event listener you will have more control on how and when you want to set them
// button.addEventListener();
// button.removeEventListener()


button.addEventListener('click', anotherButtonClickHandler);

// button.addEventListener('click', buttonClickHandler);

// to remove functions we need to specify the target, event, and the function
// setTimeOut(function, seconds in milliseconds)
// setTimeout(()=>{
    // button.removeEventListener('click', buttonClickHandler);
    // }, 3000);  




    // Removing Events with anonymous functions
// because this is an anonymous function the removeEvent listener wont be able to track it 
// button.addEventListener('click', ()=>console.log('clicked'));
// // the anonymous function creates a new function 
// // and so does the one in the removeEventListener they are two different functions 
// setTimeout(()=>{
// button.removeEventListener('click', ()=>console.log('clicked'));
// }, 3000);  




// button.addEventListener('click', buttonClickHandler.bind(this))
// // when we bind this create a new function so the one in remove will also be a different function 
// // and so does the one in the removeEventListener they are two different functions
// this is because whats happeneing in the remove its creating a new binded function 
// setTimeout(() => {
// 	button.removeEventListener('click', () => buttonClickHandler.bind(this))
// }, 3000)  
// the only way to get this to work is to store the binded function in a constant 
//  and pass that in to the event so that same function is being called instead of creating a new binded function 

const boundFn = buttonClickHandler.bind(this)

button.addEventListener('click', boundFn)
// when we bind this create a new function so the one in remove will also be a different function 
// and so does the one in the removeEventListener they are two different functions
setTimeout(() => {
	button.removeEventListener('click', boundFn)
}, 3000)  