//Static Fields/Property/Methods         Instance Field/Property/Methods
//Defined with static Keyword			-Defined without static keyword
//Only accessible on class itself,		-Only accessible on instances(
//without instantiation 				-objects made from constructor 
//Typically used in helper classes,		-are also known as instance)
//global configuration etc				-Used for core, re-usable logic


//Static Syntax
//static methodName() { ... }
// static propertyName [= value];

class User {
	constructor(n, em) {
		this.email = em
		this.name = n
	}
	// logIn = function() {//when turned into an expression it reflects on the instances of the class
	// 	console.log(`${this.email} is logged in`)
	// }
    logIn(){
		console.log(`${this.email} is logged in`)        
    }
	logOut() {
		console.log(`${this.email} is logged out`)
	}
}

const user1 = new User('YL', 'yl@gmail.com')// this is create an instance, and now this
//instance has access to the properties which are call instance properties and method if any 
console.log(user1) //User {email: 'yl@gmail.com', name: 'YL'}

user1.logIn() //yl@gmail.com is logged in
user1.logOut() //yl@gmail.com is logged out


class Square{
	constructor(x){
		this.width = x;
		this.height = x;
	}
	static  hello = 'hello';// these are lets because u can reassign them 

	static equals (a,b){
		 return a.width * a.height === b.width * b.height;// 
	}

	static isValidDimensions(a){
			return a.width === a.height
	}

	static sayHI(){
		return this.hello + ' ' + this.bye
		//In order to call a static method or property within another static method of the
		//same class, you can use the this keyword.
	}

	letSee(){
		// return hello; error
		//return this.hello; error
		return Square.hello;
	}
}
const square1 = new Square(2);//square1 is an instance of the class Square
console.log(Square.hello);//hello
Square.hello = 'HI';// reassigning a static property
console.log(Square.hello);//HI
Square.bye = "Good Bye";// can dynamically create static properties 
console.log(square1.bye);//undefined because bye is a static property 

console.log(Square.equals(square1, new Square(4)));//false

const square2 = new Square(2);

console.log((Square.equals(square1, square2)));//true

console.log(Square.sayHI());//HI Good Bye this is beacuse we created anopther static prop
// bye and we access these static props in our static method with the this.keyword

console.log(Square.isValidDimensions(square1));//true

//let see if we can access static properties with non static methods
console.log(square1.letSee());//HI
