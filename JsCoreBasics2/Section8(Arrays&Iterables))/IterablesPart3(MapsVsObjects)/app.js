//Maps vs objects 
//Maps
// Can use Any Values (and types) as a key 
// Better performance for large quantities of data
//Better performance for when adding and removing data frequently


// Objects
// Only may use SVGStringList, numbers or symbols as keys 
// Perfect for small/medium -sized sets of data
//Easier /quicker to create 


const mapPerson = new Map();

mapPerson.set(1,'Person1')
mapPerson.set(2,'Person2')
mapPerson.set(3,'Person3')
mapPerson.set(4,'Person4')

console.log(mapPerson); //Map(4) {1 => 'Person1', 2 => 'Person2', 3 => 'Person3', 4 => 'Person4'}

console.log(mapPerson.get(3));//get is how you retrieve the value pair
console.log(mapPerson.values());//MapIterator {'Person1', 'Person2', 'Person3', 'Person4'} returns all values
console.log(mapPerson.keys());//MapIterator {1, 2, 3, 4} returns all keys 
console.log(mapPerson.entries());// returns the whole map MapIterator {1 => 'Person1', 2 => 'Person2', 3 => 'Person3', 4 => 'Person4'}
