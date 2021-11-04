function showMeAWord(printF) {
	printF()
}


const wordLogger = () => {
	const promise = new Promise((resolve, reject) => {
		showMeAWord(() => {
			resolve('Yay it worked')
		})
	})
	return promise
}

function testPromise() {
	wordLogger()
		.then(data => console.log(data))
}

testPromise();

console.log('hey')
// we can call this promised wrapped callback from anywhere 
wordLogger().then(data=>console.log('after testPromise '+ data))
