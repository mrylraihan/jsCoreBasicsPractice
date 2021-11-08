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
			(error) => {
				reject(error);
			},
			opts
		);
	});
	return promise
}

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!')
		}, duration)
	})
	return promise
}

function trackUserHandler() {
	console.log('Sending position....')
	let positionData
	getPosition()
		.then((posData) => {
			positionData = posData;
			return setTimer(2000)
		 })
		 .catch(err=>{
			 console.log(err);
			 return 'on we go...  ';
		 })
		.then((data) => console.log(data, positionData))
	// setTimer(1000).then(() => console.log('Timer is Done'))
	console.log('finished!')
	// console.log('Another Test')
}
button.addEventListener('click', trackUserHandler)

// Sending positions
//getting position....
//Done!  after other stuff
//before timer in success portion
// Done!1 GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1636038086445}
