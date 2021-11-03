const button = document.querySelector('button')
const buttonlist = document.querySelectorAll('button')
const btn2 = buttonlist[1];
const output = document.querySelector('p')

function trackUserHandler() {
	console.log('Sending positions')
	// this gets offload to the browser, and the first callback is what brings us back to the stack
	navigator.geolocation.getCurrentPosition(
		posData => {
			console.log(posData)
		},
		error => {
			console.log(error)
		}
	)
	console.log('Getting position....')
}
console.log('start positioning')
button.addEventListener('click', trackUserHandler)


function timerHandler() {
    console.log('starting timer');
    setTimeout(()=>console.log('timer is back!'),0)
    console.log('after timer');
}
btn2.addEventListener('click', timerHandler)