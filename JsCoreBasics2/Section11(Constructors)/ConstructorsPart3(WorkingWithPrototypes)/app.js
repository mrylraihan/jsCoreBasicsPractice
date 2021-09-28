// Working with Prototypes

// using Constructors in a class
class SayHiPerson{
	sayHI(){
		console.log(`hey im ${this.name}`);
	}
}

class PersonClass extends SayHiPerson{
	name = 'Wallie'
	constructor() {
		super()
		this.age = 30
		this.ethnicity = 'Yemen'
		this.job = 'Developer'
	}
	greet() {
		console.log(
			`Hey, im ${this.name} and im ${this.age} years old, and im from ${this.ethnicity} and im a ${this.job}`
		)
	}
}

const person = new PersonClass();
console.log(person);//PersonClass {name: 'Wallie', age: 30, ethnicity: 'Yemen', job: 'Developer'}
person.greet()//Hey, im Wallie and im 30 years old, and im from Yemen and im a Developer

person.sayHI();//hey im Wallie 
//this method is coming from the parent class



//How to Add static props/ and methods to constructor functions 
// all static props and methods will only show in the object/ class, and will not 
//show in the constructor or the instances of that object
// for example we have constructor Cat, anything made from that constructor will show the props 
//that are currently available in that constructor, when we add teh static methods/props it wont show when we log.
// the static props/methods added will only be accessible and show on the Cat object/class 
function Cat() {
	this.name = 'Sparkels';
}

//Static methods and props are only accessible to the Object/Class
//this is a static Method added to the Cat Object 
Cat.makeNoise = function () {// this newly added function can only be accessed by the object Cat by the instance Cat because the instance only has access to whats in the constructor 
	console.log(this.name, 'static'); 
}

Cat.makeNoise();//Cat static

Cat.sound = 'Moew! static'; // this is assigning a static prop to the Cat Object

console.log(Cat.sound);// Moew! static
const cat1 = new Cat();
console.dir(Cat);//this will show the static props and methods added , makeNoise and sound
//but it wont reflect in the instance object because only the class/main object has access

console.log(cat1);//Cat {name: 'Sparkels'}
console.log(cat1.sound);//undefined because this was a static prop set to the object Cat not in the constructor of Cat

cat1.sound = 'Moew!'
console.log(cat1.sound);//'Moew!'; because this was assigned to the specific object 