//you can only use prototype when you have a constructor function
//this allows you to store the method in the prototype so everytime you create an object
//When your using a constructor function, it also has a prototype property, and thats
//where we will be adding our methods
//your only creating an object with properties , and you can access the method through the
//objects prototype
function User(email, name) {
	this.email = email
	this.name = name
	this.online = false
}
// we arent storing the methods in the object directly but we still have access to them
//here we are connecting our methods to our prototype object instead of our object

// User.prototype.login = function () {
//     console.log(this.email, 'has logged in');
// }

// User.prototype.logOut = function () {
//     console.log(this.email, 'has logged out');
// }

// User.prototype.sayName = function () {
//     console.log(`hey im ${this.name}`);
// }
// User.prototype.inOnline = function () {
//     this.online = !this.online// easy way to toggle something
//     console.log(`is online ${this.online}`);
// }

User.prototype = {
	login: function () {
		console.log(this.email, 'has logged in')
	},
	logOut: function () {
		console.log(this.email, 'has logged out')
	},
	sayName: function () {
		console.log(`hey im ${this.name}`)
	},
	inOnline: function () {
		this.online = !this.online // easy way to toggle something
		console.log(`is online ${this.online}`)
	},
}

var userOne = new User('mr.wallie@gmail.com', 'Wallie')
var userTwo = new User('mr.wr@gmail.com', 'wr')

console.log(userOne)
userTwo.login()
userTwo.logOut()
userTwo.sayName()
userTwo.inOnline()
userTwo.inOnline()
userTwo.inOnline()
userTwo.inOnline()
