class User {

    constructor(first, last) {
        // in both of these we are setting the propery we 
        // are access the setter methods and those are access the
        // properties to set them the way we want
        this.first = first,
        this.last = last
    }
    set first(value) {
        this.firstName = value.toUpperCase()
    }
    set last(value) {
        this.lastName = value.toUpperCase()
    }
    get fullName() {
        return this.firstName + " " + this.lastName
    }
}

let user1 = new User('mike', 'miller')
let user2 = new User('patrick', 'start')

console.log(user1.fullName)// MIKE MILLER
console.log(user2.fullName)// PATRICK STAR
user1.first = 'Wallie'//access the setter method
console.log(user1.fullName)//WALLIE MILLER