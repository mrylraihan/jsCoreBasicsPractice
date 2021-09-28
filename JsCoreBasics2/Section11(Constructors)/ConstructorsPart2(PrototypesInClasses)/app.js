//Intro to Prototypes in classes
//JavaScript uses "Prototypical inheritance"
//the class Syntax is basically just 'syntactic sugar

//class Person{}
//function Person(){}  Both can create a Person Object

//Every constructor you build has a prototype property
//Prototypes can be considered FallBack Objects

function Person(){
	this.name = 'Wallie';
	this.greet= function(){
		console.log(`Im ${this.name}`);
	}
}
Person.prototype = {
	sayHi : function(){
	   console.log(`Hey im ${this.name}`);
   }, 
   sayBye : function () {
	   console.log(`Bye im ${this.name}`)
   }
}

const p = new Person();
console.log(p);//Person {name: 'Wallie', greet: ƒ}
p.greet();//Im Wallie
p.sayHi();//Hey im Wallie
p.sayBye();//Bye im Wallie
console.log(p.__proto__);// this is the default prototype every 
//Constructor assigns an object based on it
//{sayHi: ƒ, sayBye: ƒ}


function Person1() {
	this.name = 'Wallie'
	this.greet = function () {
		console.log(`Im ${this.name}`)
	}
}
Person1.prototype.sayHi = function () {
		console.log(`Hey im ${this.name}`)
	}

Person1.prototype.sayBye= function () {
		console.log(`Bye im ${this.name}`)
	}

const p1 = new Person1();
console.log(p.__proto__);