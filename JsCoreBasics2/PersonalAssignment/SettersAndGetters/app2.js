class MyClass1 {
	constructor(n, a) {
		this.name_ = []
		this.name = this.names = n
		this.age = a
	}

	set names(val) {
		this.name_.push(val)
		this.name = val
	}
	get names() {
		return this.name_[this.name_.length - 1]
	}
}

const instanceOfMyClass1 = new MyClass1('Wallie', 29)
console.log(instanceOfMyClass1.name) //Wallie
console.log(instanceOfMyClass1) //MyClass1 {name_: Array(1), name: 'Wallie', age: 29}
instanceOfMyClass1.names = 'Max'
console.log(instanceOfMyClass1.names) //Max
console.log(instanceOfMyClass1.name) //Max
console.log(instanceOfMyClass1) //MyClass1 {name_: Array(2), name: 'Max', age: 29}
console.log(instanceOfMyClass1.name_) //['Wallie', 'Max']
