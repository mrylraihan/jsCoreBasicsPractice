// Constructor Function, Blueprint for objects, they have Properties & Methods
// Classes Blueprint for Objects, they also have Properties & Methods

// using Constructors in a class
class PersonClass {
	static ethnicity;//static prop
    #job;//private prop
	name = 'Wallie'//public prop
	constructor(ethnicity, job = "Developer") {//constructor
		this.age = 30
        PersonClass.ethnicity = ethnicity
        this.#job = job
	}
	greet() {//method with how you access static and private props 
		console.log(`Hey, im ${this.name} and im ${this.age} years old, and im from ${PersonClass.ethnicity} and im a ${this.#job}`)
	}
}
// you can set private props in a constructor
const person1 = new PersonClass('Yemen');
console.log(person1);//Person {name: 'Wallie', age: 30, #job: 'Developer'}
person1.greet()//Hey, im Wallie and im 30 years old, and im from Yemen and im a Developer


// Using a constructor function 
function PersonConstructor(){
    this.name = 'Wallie';
    this.age = 30;
    this.job = 'Developer';
    // this.#job = 'developer';cant have private variables in a constructor function
    PersonConstructor.ethnicity = "yemen";
    this.greet = function(){
        console.log(
					`Hey, im ${this.name} and im ${this.age} years old, and im from ${
						PersonConstructor.ethnicity
					} and im a ${this.job}`
				)
    }
}

const person2 = new PersonConstructor();
console.log(person2);// PersonConstructor {name: 'Wallie', age: 30, job: 'Developer', greet: ƒ}
person2.greet();// Hey, im Wallie and im 30 years old, and im from yemen and im a Developer
