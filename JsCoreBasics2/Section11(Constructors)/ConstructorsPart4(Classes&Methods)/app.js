// when you create a class the methods that are created in the class are moved to the
//prototype of that class 
class Person{
	constructor(n,a){
		this.name = n;
		this.age = a;
	}
	sayDetails() {
		console.log(`Hey im ${this.name} and im ${this.age}`);
	}
}

const pclass = new Person('Wallie', 30);
pclass.sayDetails();// Hey im Wallie and im 30
console.log(pclass);//Person {name: 'Wallie', age: 30}
// this is why the methods in the class dont show on the instance 


//when you create a constructor function the methods act differently 
//and are then shows in the instance of that constructor 

function Person1(n,a) {
	this.name= n;
	this.age = a;
	this.sayDetails = function () {
		console.log(`Hey im ${this.name} and im ${this.age}`)
	}
}

const pconstructor = new Person1('Wayel', 30);
pconstructor.sayDetails();//Hey im Wayel and im 30
console.log(pconstructor);//Person1 {name: 'Wayel', age: 30, sayDetails: ƒ}
// when this object is created from this constructor it create a copy of this method as well, 
// this is why its recommended to ad them to the prototype of this constructor


// the equivalent to the way the class is handling methods is this way 
//constructor with prototype
function Person2(n, a) {
	this.name = n;
	this.age = a;
}

Person2.prototype.sayDetails = function () {
	console.log(`Hey im ${this.name} and im ${this.age}`);
}

const pconstructorproto = new Person2('Mallie', 30);
pconstructorproto.sayDetails();//Hey im Mallie and im 30
console.log(pconstructorproto);//Person2 {name: 'Mallie', age: 30}


//Method ShortHand 
// class Person{
// 	greet(){
// 		console.log('Hello');
// 	}
// }


// //Property Function
// class Person{
// 	greet = function(){
// 		console.log('Hello');
// 	}
	// constructor(){
	// 	this.greet = function () {
			
	// 	}
	// }
// }


// //Property Arrow Function
// class Person{
// 	greet = ()=>{
// 		console.log('Hello');
// 	}
// constructor(){
	// 	this.greet= ()=> function () {
			
	// 	}
	// }
// }