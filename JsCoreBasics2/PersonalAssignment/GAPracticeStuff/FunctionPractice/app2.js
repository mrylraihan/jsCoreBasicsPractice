// Write your answers inside this file, at the places where it's indicated by
// the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for
// keeping track of things. Identify at least two entites such a program might
// need and describe attributes and methods of each.
//
// EXAMPLE
// Description: Our app manages car sales.
// Entity: Car
// Attributes: make, model, year
// Methods: drive, brake, park
//
// Entity: SalesPerson
// Attributes: name, commissionRate
// Methods: sell, call

// Answer Starts Here
// the two entities would be date/time and task 
    // Entity:Date/Time
    // Attributes: availability, timeSlots, daySlots
    // Methods: checkAvailability,

    // Entity:Task
    // Attributes: timepreTask,howImportant,reminders
    // methods: reminders, addTask, removeTask
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
const owner = {name:'Mike Williams', address: '555 CandyCane Road, New York, 11232',numOfPets: 2 }

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization (private)
// Methods: vocalize (a 'getter' for the `vocalization` attribute)
// Note: We want `vocalization` to be private since we are creating a
// 'getter' method for it. You'll need special syntax to do this.

// Replace null with your answer
const pet = {
    name:'sparklez',
    species: 'cat',
    breed: 'Maine Coon',
    vocalization:'meow',
    get vocalize(){
        return this.vocalization.toUpperCase();
    }
}

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (n,s,b,v) {
	this.name = n
    this.species = s
    this.breed = b
    this.vocalization = v
}


// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

/* your answer here */
Pet.prototype.vocalize = function () {
 return this.vocalization.toUpperCase()   
}

const pet1 = new Pet('mousey','mouse','lab mouse','tyy');
console.log(pet1.vocalize());