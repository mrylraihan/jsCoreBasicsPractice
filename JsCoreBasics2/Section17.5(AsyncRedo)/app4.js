// this will print in sync order
// function sayHi(){
//     console.log('hello from say hi');
// }

// function invokeCB(cb){
//     cb()
// }

// invokeCB(sayHi)// will log first 

// console.log('hi');//will log second 

// async wraps everything in a promise thats why it gets sent to the browser
//the await is like a then block actually exactly like then block but behind the scenes!

function sayHi2() {
	return 'hello from say hi'
}

async function invokeCBAsync(cb) {
	const rv = await cb()
	console.log(rv)
}

invokeCBAsync(sayHi2)//because we are using async, 
//this now becomes a async function
//so it gets pushed ot the browser while js keeps executing , 
//then comes back once everything is done , and logs second!

console.log('hi')//gets logged first 