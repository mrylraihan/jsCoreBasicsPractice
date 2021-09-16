function Hero(name, alias){
this.name = name;
this.alias = alias;
}

Hero.prototype.unmask = function () {
	return `${this.name} is ${this.alias}`
}

const batMan = new Hero('Batman', 'Bruce');
console.log(batMan.unmask());

