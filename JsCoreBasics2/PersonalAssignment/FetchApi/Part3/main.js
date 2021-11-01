
// the fetch in both are promises 

function fetchKanyeQuote() {
	const res = fetch('https://api.kanye.rest/')
		.then((res) => {
			return res.json()
		})
		.then((result) => console.log(result, 'promises'))
		.catch((err) => console.log(err))
}

fetchKanyeQuote()


function fetchTest() {
		const res = fetch('https://www.boredapi.com/api/activity')
			.then((res) => {
				return res.json()
			})
			.then((result) => console.log(result, 'promises'))
			.catch((err) => console.log(err))
}

fetchTest()


// async is a keyword that allows you to use another keyword await 
async function fetchCatFacts() {
	try{
		const res = await fetch('https://catfact.ninja/fact');
		const data = await res.json();
		console.log(data, 'Async')
	}catch(err){
		console.log(err);
	}
}

fetchCatFacts()

async function fetchKanyeQuoteAsync() {
	try{
		const res = await fetch('https://api.kanye.rest/')
		const data = await res.json();
		console.log(data, 'Async');
	}catch(err){
		console.log(err);
	}
}

fetchKanyeQuoteAsync()
