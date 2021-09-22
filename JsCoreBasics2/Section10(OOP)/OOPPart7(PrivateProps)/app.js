//Inheritance in JavaScript
//the idea behind of inheritance is having a base class
class Hero {
	type = 'SuperHero'
	constructor(n, al, p) {
		this.name = n
		this.alias = al
		this.power = p
	}
	unmasked() {
		console.log(
			`The ${this.type} ${this.alias} is actually ${this.name}, and there power is ${this.power}`
		)
	}
}
const batMan = new Hero('Bruce Wayne', 'Batman', 'Super Rich')
batMan.unmasked()
//The SuperHero Batman is actually Bruce Wayne, and there power is Super Rich

class AntiHero extends Hero {
	type = 'AntiHero'
}
const slade = new AntiHero('Slade Wilson', 'Slade', 'Super Soldier')
slade.unmasked()

//The AntiHero Slade is actually Slade Wilson, and there power is Super Soldier
