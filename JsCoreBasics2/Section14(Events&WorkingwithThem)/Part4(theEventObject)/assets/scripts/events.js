// The Event Object
const buttons = document.querySelectorAll('button')
// is the event this 
// const buttonClickHandler = e => {
// 	console.log('This was clicked!') //This was clicked!
// 	console.log(e) //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// }

const buttonClickHandler = (event) => {
	console.log('This was clicked!') //This was clicked!
	console.log(event) //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    event.target.disabled = true
}

buttons.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler)
});

// setTimeout(() => {
// 	button.removeEventListener('click', buttonClickHandler)
// }, 3000)
