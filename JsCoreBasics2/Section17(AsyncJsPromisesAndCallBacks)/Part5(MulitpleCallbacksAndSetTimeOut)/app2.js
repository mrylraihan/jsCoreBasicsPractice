const button = document.querySelector('button')
const output = document.querySelector('p')

function trackUserHandler() {
	console.log('Sending positions')

	navigator.geolocation.getCurrentPosition(

		posData => {
            console.log('before timer in success portion');
            setTimeout(()=>{
                console.log(posData)
            }, 2000)
		},
		error => {
			console.log(error)
		}
	);
    setTimeout(()=>console.log('Timer done!'), 0)
	console.log('getting position....')
    console.log('Another Test');
}
button.addEventListener('click', trackUserHandler)
