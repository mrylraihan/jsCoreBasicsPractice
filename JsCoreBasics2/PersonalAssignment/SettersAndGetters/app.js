class MyClass{
	constructor(){
		this.name_ = [];
	}

	set name(val){
		this.name_.push(val)
	}
	get name(){
		return this.name_[this.name_.length - 1]
	}
}

const myClassInstance = new MyClass();
myClassInstance.name = 'Mike';//using the setter method
console.log(myClassInstance.name);//Mike //using the getter method

myClassInstance.name = 'Lu';//using the setter method again 
console.log(myClassInstance.name);//Lu//using the getter method again 

console.log(myClassInstance.name_);//(2) ['Mike', 'Lu'] //the actual property
