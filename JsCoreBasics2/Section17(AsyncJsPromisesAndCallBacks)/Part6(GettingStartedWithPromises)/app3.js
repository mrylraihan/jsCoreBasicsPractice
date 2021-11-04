const button = document.querySelector('button')
const output = document.querySelector('p')

const setTimer = (data,duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data) // will be the return of the promise is sucessful
		}, duration)
	})
	return promise
}

function trackUserHandler() {
	console.log('Sending positions')

	navigator.geolocation.getCurrentPosition(
		(posData) => {
			console.log('before timer in success portion')
			setTimer(posData,1000).then((data) => {
				console.log(data) //data is the resolve(posData), this will equal posData
			})
		},
		(error) => {
			console.log(error)
		}
        
	)
	setTimer('words', 1000).then((data) => console.log(data+' become resolve in the second setTimer'))//words become resolve now, gets returned to data
	console.log('getting position....')
	// console.log('Another Test')
}
button.addEventListener('click', trackUserHandler)

// Sending positions
//getting position....
//words become resolve in the second setTimer
//before timer in success portion
//GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1636038086445}
