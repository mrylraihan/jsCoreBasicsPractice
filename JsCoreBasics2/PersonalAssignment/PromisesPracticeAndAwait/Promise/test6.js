// Callback function that takes a string
//promisify this call back
function Callback(cb) {
	cb()
}
const isTrue = false;
const callBackPromise = () => {
	return new Promise((resolve, reject) => {
		Callback(() => {
            if (!isTrue)reject('its false')
			resolve('its true!')
		})
	})
}

callBackPromise()
	.then((str) => {
		console.log(str, 'then 1')
		return str
	})
	.catch((err) => {
		console.log(err)
		return 'Word from catch'
	})
	.then((str) => console.log(str, 'then 2'))
    .finally(()=>console.log('thank you!'))
