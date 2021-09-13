//Special key names 
//Anything you use as a variable name you can use as a key name
//keys are more flexible then variables
//not everything you use as a key name can be used as a variable
// you can store strings as keys 
//technically the key in object automatically are converted to strings 
// but you can also do it this way even though its not recommended 
//

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