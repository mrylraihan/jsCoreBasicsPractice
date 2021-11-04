// const button = document.querySelector('button')
// const output = document.querySelector('p')
const button = document.querySelector('button')
const output = document.querySelector('p')

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success)
			},
			(error) => {},
			opts
		)
	})
	return promise
}

const setTimer = (duration, pdata) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(pdata) // will be the return of the promise is successful
		}, duration)
	})
	return promise
}

function trackUserHandler() {
	console.log('Sending positions')
	getPosition()
		.then((posData) => setTimer(2000, posData))
		.then((data) => console.log(data)) // this data is the return of the setTimer
	setTimer(1000).then(() => console.log('Timer is Done'))
	console.log('getting position....')
	// console.log('Another Test')
}
button.addEventListener('click', trackUserHandler)

// Sending positions
//getting position....
//Done!  after other stuff
//before timer in success portion
// Done!1 GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1636038086445}
