// Event Propagation And Stop Propagation (below)
//this is known as event propagation 
// its means that the event doesn't just occur on the 
//element its self but also on the ancestors 
// bubbling
//remember not all events propagate(bubble), you can check in the event and 
//if the bubble is false or true, example mouseEnter does not bubble, but click does
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

// how to Stop event Propagation 
// you need to access the event and .stopPropagation 
//on the specific element you want it to stop at 
buttons[1].addEventListener('click', (event) => {
	event.stopPropagation()// on the child, or where the
	// initial event is happening 
	console.log('in button')
})
// logged : in button
//        
divs[1].addEventListener('click', (event) => {

	console.log('in div')
})
// logged : in div
