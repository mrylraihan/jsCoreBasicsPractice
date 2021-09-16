const foo = {
	a: 'hello', //data properties
	b: 'monday', //data properties
}
console.log(foo.a) //how you call a property in a object
//hello

//Setters and Getters are accessor properties
const zorb = {
	message: 'hola',
	set setMessage(val) {
		// you need to add the set indicator
		this.message = val
	},
	get getMessage() {
		// you need to add the get indicator
		return this.message
	},
}
//if you dont js will think they are just functions
zorb.setMessage = 'Salam'
console.log(zorb.getMessage)//Salam

//another example
const shout = {
    message: 'HELLO!',
    set setMessage(val){
        this.message = val.toUpperCase() + "!"
    },
    get getMessage(){
        return this.message
    }
}

shout.setMessage = 'this is sparta!'
console.log(shout.getMessage);//THIS IS SPARTA!
shout.message = 'hey'// you can still access the variable and assign it this way
console.log(shout.getMessage);//hey
shout.setMessage = 'hey'// now this is getting assigned through the setter 
console.log(shout.getMessage);//HEY!
//setters and getters gives us flexiblilty in how we want to set and get our properties 


const shout1 = {
	_message: '',
	set message(v){
		this._message = v.toUpperCase() + '!';
	},
	get message(){
		return this._message;
	}
}

shout1.message = 'hello there'// this is setting 
console.log(shout1.message);//HELLO THERE!// this is getting 
console.log(shout1._message);//HELLO THERE!// this is the property


//Another example
const superSecureTerminal = {
	allUserNames: [],
	_userName: '',
	set userName(val) {
		this._userName = val
		this.allUserNames.push(val)
	},
	get userName() {
		return this._userName
	},
	showHistory: function () {
		console.log(this.allUserNames)
	},
	// showHistory() { another way to write a function in an object with omitting 
	//the : and function keywords
	// 	console.log(this.allUserNames)
	// },
}

superSecureTerminal.userName = 'mikeWins';
superSecureTerminal.userName = 'mr.ylraihan';
console.log(superSecureTerminal.userName);
console.log(superSecureTerminal.showHistory());