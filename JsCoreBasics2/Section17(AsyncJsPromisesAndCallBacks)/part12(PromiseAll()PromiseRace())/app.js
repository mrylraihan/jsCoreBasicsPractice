// Promise.all() promise.race() etc...
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

// race takes in a array of promises , and returns the one that is finished first
// its a race between both promises, which ever is the fastest it will be there return data
// so depending on the one finished will be the returned data, you can chain more promises
Promise.race(
	[
		getPosition(),
		setTimer(1000)// this one finishes first
	]
).then(console.log)
// Done!

Promise.all([getPosition(), setTimer(1000)]).then(console.log)
//  [GeolocationPosition, 'Done!']

function promiseAllTest() {
	let data1;
	let data2;
	Promise.all([getPosition(), setTimer(1000)])
	.then(data=>{
		data1= data[0]
		data2= data[1]
		return data
	})
	.finally(()=>{
		console.log(data1);
		console.log(data2);
	})
}

// promiseAllTest()
// GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1636398229255}
// Done!



async function promiseAllTest1() {
	let data1
	let data2
	try{
		const data = await Promise.all([getPosition(), setTimer(1000)])
		data1 = data[0]
		data2 = data[1]
	}catch(error){
		console.log(error);
	}
	console.log(data1);
	console.log(data2);		
}

promiseAllTest1()

// GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1636398229255}
// Done!
// if this Promise.all() has one rejection they will all reject
// similarly to a promise chain
// we we dont want that we can use allSettled

Promise.allSettled([getPosition(), setTimer(1000)]).then(console.log)
// [{…}, {…}]
// {status: 'fulfilled', value: GeolocationPosition}
// {status: 'fulfilled', value: 'Done!'}
Promise.allSettled([getPosition(), setTimer(1000)]).then(data=>console.log(data, "last"))

// if one fails in the allSettled then we still get an array of objects just the 
//status on them will be different from fulfilled to rejected 