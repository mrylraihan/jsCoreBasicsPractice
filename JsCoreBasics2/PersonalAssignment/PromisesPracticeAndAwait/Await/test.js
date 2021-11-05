function showMeAWord(printF) {
	printF()
}

const wordLogger = () => {
	return new Promise(resolve => {
		showMeAWord(() => {
			resolve('Yay it worked')
		})
	})
	
}

async function testPromise() {
	let result
	try{
		result = await wordLogger()
	}catch(error){
		console.log(error);
	}
		console.log(result);
}

testPromise();
console.log('after testPromise');