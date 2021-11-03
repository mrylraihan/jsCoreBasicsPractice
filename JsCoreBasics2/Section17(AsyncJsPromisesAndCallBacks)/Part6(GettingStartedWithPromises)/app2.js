// const button = document.querySelector('button')
// const output = document.querySelector('p')

// function trackUserHandler() {
// 	console.log('Sending positions')

// 	navigator.geolocation.getCurrentPosition(
// 		(posData) => {
// 			console.log('before timer in success portion')
// 			setTimeout(() => {
// 				console.log(posData)
// 			}, 2000)
// 		},
// 		(error) => {
// 			console.log(error)
// 		}
// 	)
// 	setTimeout(() => console.log('Timer done!'), 0)
// 	console.log('getting position....')
// 	console.log('Another Test')
// }
// button.addEventListener('click', trackUserHandler)


const button = document.querySelector('button')
const output = document.querySelector('p')

const setTimer = (duration) =>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Done!'); 
        }, duration);
     });
     return promise
};

function trackUserHandler() {
	console.log('Sending positions')

	navigator.geolocation.getCurrentPosition(
		(posData) => {
			console.log('before timer in success portion')
			setTimer(2000).then(data=>{
                console.log(data + '1', posData);
            })
		},
		(error) => {
			console.log(error)
		}
	)
	setTimer(1000).then((resolve)=>console.log(resolve, ' after other stuff'))
	console.log('getting position....')
	// console.log('Another Test')
}
button.addEventListener('click', trackUserHandler)