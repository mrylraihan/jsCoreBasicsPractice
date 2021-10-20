// const ids = new Set([1,2,3]);
// ids.add(4);
// console.log(ids);
// console.log(ids.has(4));

// for(const entry of ids.entries()){
//     console.log(entry);
// }
// // or 

// for(const item of ids){
//     console.log(item)
// }

// //convert your set to an array 

// const myArray = Array.from(ids)
// console.log(myArray);


// Maps 

// const person1 = {name:'Max'};
// const person2 = {name:'Wallie'};

// const person1Data = {date: 'yesterday', price: 10 }
// const personData = new Map();
// personData.set(person1, person1Data);
// //mapping an object to an object 
// // personData.set(person2, [{date:'the other day', price:20}]);
// //mapping an object to an array

// console.log(personData);
// //for/ofloop
// // for(const entry of personData.entries()){
// //     console.log(entry);
// // }
// for(const entry of personData.entries()){
//     console.log(entry);
// }

//or use array destructuring too
// for(const [key, value] of personData.entries()){
//     console.log(key, value);
// }
//for just the keys to be logged
// for(const key of personData.keys()){
//     console.log(keys);
// }
//for just the values to be logged
// for(const value of personData.values()){
//     console.log(value);
// }

let person = {name: 'Wayel'};

const persons = new WeakSet();
persons.add(person)

console.log(persons);

// person = null;
console.log(persons);

const personData = new WeakMap();
personData.set(person, 'extra info');
person = null;

console.log(personData);