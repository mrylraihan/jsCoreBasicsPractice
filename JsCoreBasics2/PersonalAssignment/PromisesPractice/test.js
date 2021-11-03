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
