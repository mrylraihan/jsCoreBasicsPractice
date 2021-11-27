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
const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!duration) {
				reject('Timer not set!')
			}
			resolve('Done!')
		}, duration)
	})
	return promise
}

async function trackUserHandler() {
	// let positionData
    let posData;
    let timerData
    try{
         posData  = await getPosition() 
         timerData = await setTimer(2000)
    }catch(error){
        console.log(error);//handles all the errors just like catch would 
    }
    console.log(timerData, posData);

    // const postData2 = await getPosition()
    // console.log(postData2);
		// .then((posData) => {
		// 	positionData = posData
		// 	return setTimer(2000) //changing our return to a new promise
		// })
		// .catch((err) => {
		// 	console.log(err)
		// 	return 'we had an error'
		// })
		// .then((data) =>
		// 	positionData === undefined
		// 		? console.log(data)
		// 		: console.log(data, positionData)
		// )
	// setTimer(2000)
	// 	.then(() => console.log('timer Done!'))
	// 	.then((data) => console.log(data))
	// 	.catch((error) => console.log(error))
    //     .finally(()=> console.log('All Done!'))
	console.log('Getting position') // this line always gets executed before the ones above,
	// this is because the callbacks get sent to the browser
	// while this one enters the stack immediately
}

button.addEventListener('click', trackUserHandler)
