//Special key names 
//Anything you use as a variable name you can use as a key name
//keys are more flexible then variables
//not everything you use as a key name can be used as a variable
// you can store strings as keys 
//technically the key in object automatically are converted to strings 
// but you can also do it this way even though its not recommended 
//
const movieList = document.getElementById('movie-list')

movieList.style['background-color'] = 'red'
movieList.style.display = 'block'

let person = {
	"first name": 'Wayel', 	
	age: 29
}
// console.log(person."first name"); this will error 
console.log(person["first name"]);// this is how you would be able to locate
//Wayel
const firstName = person["first name"]
console.log(firstName);//Wayel

//with sqr [] you can access any property in a object 
//you just need to turn the proetery to a string 
console.log(person['age']);//29

//this is a different way of accessing properties in an object


for (const property in person) {
	console.log(`${property} : ${person[property]}`)
}

// you can use [] bracets not only to dynamically access objects but to also set them 
const dynamicallySetting = 'name' // name will be the key but we are using the sqbrts 
const me ={// to set the value stored in teh variable as the key
	[dynamicallySetting]:'Wallie'
}
console.log(me);//{name: 'Wallie'}


//how to convert a array to a string 
const array = [1,2,3,4,5]
const stringA = ''+array
console.log(typeof array);//object which is an array in js
console.log(typeof stringA);//string