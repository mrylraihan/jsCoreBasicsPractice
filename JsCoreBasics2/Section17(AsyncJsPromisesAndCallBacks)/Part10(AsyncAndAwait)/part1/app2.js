const button = document.querySelector('button')
const output = document.querySelector('p')

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
			resolve('Done!') // will be the return of the promise is successful
		}, duration)
	})
	return promise
}

 async function trackUserHandlerTest() {
	console.log('Sending positions');
    let posData;
    let timerData;
    try{
        posData = await getPosition();
        timerData = await setTimer(2000);
    }catch(error){
        console.log(error);
    }
    console.log(timerData, posData);
    console.log('Done!');
    
		// .then((posData) => {
		// 	positionData = posData
		// 	return setTimer(2000) //because of this return we are getting a new return from the setTimer which will be data in the next one
		// })
		// .then((data) => console.log(data, positionData))
		// .catch((err) => console.log(err)) // this data is the return of the setTimer
}
button.addEventListener('click', trackUserHandlerTest)
