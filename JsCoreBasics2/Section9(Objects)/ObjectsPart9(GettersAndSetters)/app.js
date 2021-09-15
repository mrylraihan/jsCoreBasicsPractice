//Getters and setters in js
//Setters and Getters allows us to control how properties can be assign and retrieved

const person = {
	firstName: 'Wallie',
	lastName: 'Raihan',
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	},
	set fullName(val) {
		const parts = val.split(' ')
		this.firstName = parts[0]
		this.lastName = parts[1]
	},
}

console.log(person.fullName) //Wallie Raihan
person.fullName = 'Wayel Raihans'
console.log(person.fullName) //Wayel Raihans

//===========================>
//another example

const person2 = {
	firstName: 'Mike',
	lastName: '',
	age: 0,
	set addLastName(lName) {
		this.lastName = lName
	},
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	},
	set addAge(value) {
		this.age = value
	},
	get getAge() {
		return this.age
	},
	get greet() {
		return ' hey its ' + this.fullName
	},
}

person2.addAge = 20

console.log(person2.getAge)//20

person2.addLastName = 'Ronald'

console.log(person2.fullName)//Mike Ronald
console.log(person2.greet)// hey its Mike Ronald
console.log(person2.lastName);//Ronald