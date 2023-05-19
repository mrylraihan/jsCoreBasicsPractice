class Person{
    #address;
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.#address = address
    }
    // basic getters and setters 
    getAddress(){
        return this.#address
    }
    setAddress(value){
        this.#address = value
    }
}

const person1 = new Person('Wallie', 31, '181 28th street')
console.log(person1.getAddress())
person1.setAddress('2214 East 15th')
console.log(person1.getAddress())

// let user = {
//     firstName:'',
//     lastName:'',
//     set first(v){
//         this.firstName = v.toUpperCase()
//     },
//     set last(v){
//         this.lastName = v.toUpperCase()
//     },
//     get fullName(){
//         return this.firstName+" "+this.lastName
//     }
// }

// user.first = 'mike'
// user.last = 'merly'
// console.log(user.fullName)
