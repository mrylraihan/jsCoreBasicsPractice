class User {
#email
    constructor(first, last, email) {
        this.first = first,
        this.last = last,
        this.emailAddress = email
    }
    set emailAddress(value) {
        this.#email = value.toUpperCase()
    }
    get emailAddress() {
        return this.#email
    }
    fullName() {
        return this.first + " " + this.last
    }
}
// 
const user1 = new User('wallie', 'raihan', 'mr.wallie@gmail.com')
console.log(user1.fullName())
// this will return the full name concatenated 
console.log(user1.emailAddress)
user1.emailAddress = 'no'//this is how we access the setter method in line 8
console.log(user1.emailAddress)// this is how we access the getter method in line 11