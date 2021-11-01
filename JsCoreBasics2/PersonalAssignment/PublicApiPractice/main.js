// const fetch =  require('node-fetch');



// import fetch from 'node-fetch'
// the fetch in both are promises 

function fetchKanyeQuote() {
	const res = fetch('https://api.kanye.rest/')
		.then((res) => {
			return res.json()})
		.then(result=>console.log(result))
		.catch((err) => console.log(err))
}

fetchKanyeQuote()


function fetchTest() {
		const res = fetch('https://www.boredapi.com/api/activity')
			.then((res) => {
				return res.json()
			})
			.then((result) => console.log(result))
			.catch((err) => console.log(err))
}

fetchTest()


// async is a keyword that allows you to use another keyword await 
async function fetchCatFacts() {
	try{
		const res = await fetch('https://catfact.ninja/fact');
		const data = await res.json();
		console.log(data);
	}catch(err){
		console.log(err);
	}
}

fetchCatFacts()
