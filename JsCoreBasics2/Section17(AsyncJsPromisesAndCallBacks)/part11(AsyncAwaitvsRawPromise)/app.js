const button = document.querySelector('button')
const output = document.querySelector('p')
const btn2 = document.getElementById('noneA')

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success)
			},
			(error) => {
				reject(error)
			},
			opts
		)
	})
	return promise
}

const setTimer = async (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!')
		}, duration)
	})
	return promise
}

function trackUserHandlerNonAwait() {
	console.log('Sending positions')
	let positionData;
	getPosition()
		.then((posData) => {
			positionData = posData
			return setTimer(2000, posData)})
		.then((data) => console.log(data, positionData)) // this data is the return of the setTimer
		.catch((error) => console.log(error))
	
	console.log('getting position....')
	
}

btn2.addEventListener('click', trackUserHandlerNonAwait)
// this logs
// Sending position
// getting position....
// Done! GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1636394403710}


async function trackUserHandler() {
	let posData;
	let timerData
	console.log('Sending positions');
	try{
		posData = await getPosition();
		timerData = await setTimer(2000)
	}catch(error){
		console.log(error);
	}
    console.log(timerData, posData)
	console.log('getting position....')
}
// this logs 
// Sending position
// Done! GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1636394403710}
// getting position....

button.addEventListener('click', trackUserHandler)
