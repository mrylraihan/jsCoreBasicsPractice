console.log('im working')

class Person {
    #salary;
    constructor(name, age, salary = 0) {
        this.name = name;
        this.age = age;
        this.#salary = salary
    }
    set mySalary(value) {
        this.#salary = value 
        return this.#salary
    }
    get mySalary() {
        
            let salary = "$" + this.#salary + ".00"
            return salary
    }
}
// now the way we can access the private variable is with out getter method on line 14

const person = new Person('Wallie', 31, 100)
console.log(person) //Person {name: 'Wallie', age: 31, #salary: '$100.00'}
// console.log(person.#salary) //now is we try to access the private variable we get an error 
console.log(person.mySalary) //$100.00//the way we can access it is with the getter method
// we also see how when we are setter the salary variable in the constructor its using the setter because 
// look how we transformed 100 to $100.00

// now if i want to modify the private variable i cant do that directly i have to do that with the setter method 
// now even though we are saying a method we will not need the () the getter and setter key word allows us to access with an = operator 
person.mySalary = 2000
console.log(person.mySalary)//$2000.00
console.log(person)//Person {name: 'Wallie', age: 31, #salary: 2000}
