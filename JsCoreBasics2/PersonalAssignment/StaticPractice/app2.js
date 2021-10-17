class Animal {
	static planet = 'Earth' //static prop only class can access
	makeNoise = 'bark!'
	constructor(name, height, weight) {
		this.name = name
		this.height = height
		this.weight = weight
		console.log(
			'Created animal named',
			name,
			'and lives on',
			this.constructor.planet
		)
		console.log('Created animal named', name, 'and lives on', Animal.planet)
	}
	nameLength() {
		return this.name.length
	}
	static staticMethod() {
		console.log(`All Animals live on ${this.planet} ${this.makeNoise}`) //no access to non static props
		//this points to the static prop
		//in static methods not the object like in instance methods
	}
}

//this is an instance of the class Animal 
const dog = new Animal('sparky', 2, 90);//Created animal named  sparky
console.log(dog.nameLength());//6

//now if we want to access the static property they is two ways
//through the class
console.log(Animal.planet);//Earth
//through the instance constructor
console.log(dog.constructor.planet)//Earth

//you can even dynamically create static variables
Animal.breath = 'breath';
console.log(Animal.breath, Animal.planet);//breath Earth

Animal.staticMethod()//All Animals live on Earth
console.log(dog.makeNoise);//bark