const person = {
    name:'Wallie',
    address:'111 street',
    age:30,
    get(key){
        // this will refer to the object its in 
        // you can access properties of an object with [] but you have pass in the property as a string 
        // to access key dynamically to return the value 
        return this[key]

    }
}
// here we are passing in the key dynamically in to the object with a string
console.log(person.get('name'));//wallie
console.log(person['name']);//Wallie
console.log(person['age']);//30
console.log(person['address']);//111 street


for (const key in person) {
    // will log all keys in the object then pass them in to the [] to access them dynamically
    console.log(`${key}: ${person[key]}`);
}