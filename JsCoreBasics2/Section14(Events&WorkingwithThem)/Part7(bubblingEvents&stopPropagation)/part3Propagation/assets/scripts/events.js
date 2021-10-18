// Event Propagation 

// bubbling
const buttons = document.querySelectorAll('button');
const divs = document.querySelectorAll('div')

console.log(buttons);
console.log(divs);

buttons[0].addEventListener('click', ()=>{
	console.log('in button');
})
// logged : in button
//        : in div
divs[0].addEventListener('click', ()=>{
	console.log('in div');
})
// logged : in div

// this will run the event from the inside out so the first 
//event will run in the button then the second in the div


buttons[1].addEventListener('click', () => {
	console.log('in button')
})
// logged : in div
//        : in button
divs[1].addEventListener('click', () => {
	console.log('in div')
}, true)
// logged : in div

//because this is set to true as the third param it will follow the capture phase,
//so it hits runs the events from the outside in 

//this is known as event propagation 
// its means that the event doesn't just occur on the element its self but also on the ancestors 