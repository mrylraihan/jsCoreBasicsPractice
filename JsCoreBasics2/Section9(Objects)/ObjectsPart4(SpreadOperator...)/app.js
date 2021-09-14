// the Spread Operator with objects how to make a full copy of an object 
const person = {
	name:'Wallie', 
	hobbies:['sports', 'coding'], 
};

const anotherPerson = person; // now the copy the same reference value
// so if you change one thing in one object it will show in the other 

anotherPerson.name = 'Wayel';// now the name in both person and anotherPerson will change
// to Wayel

console.log(anotherPerson.name, person.name );//Wayel Wayel this is because its the same 
//reference pointer to the object so they both have access

//how to use the spread operator to make a full copy of an object with out copying the reference pointer 

const person2 = {...person};// copies each keyValue pair(properties) and copies it to the new object
console.log(person2);//{name: 'Wayel', hobbies: Array(2)}
person2.name = 'wally';
console.log(person2);//{name: 'wally', hobbies: Array(2)}
console.log(person2.name, person.name);//wally Wayel // they dont affect each other becvause they both have different references 
// but with the hobbies they are still referencing the same object, the spread operator still doesnt do a deep enough copy 
// the spread operator makes a copy of the top level key value pair an any nested properties are kept the same 

// How to copy an object manually 
person2.hobbies.push('singing')
console.log(person2.hobbies);// (3) ['sports', 'coding', 'singing']
console.log(anotherPerson.hobbies);//(3) ['sports', 'coding', 'singing'] 
// Even though the top level properties are copied, the nest propteries are still pointing to the same reference

const person3 = {...person, age:29, hobbies:[...person.hobbies]}// now this copies a brand new object with an new array, 
console.log(person3);//{name: 'Wayel', hobbies: Array(2), age: 29}
// this copied the object and even copied the nested array and added a property called age :29
person3.hobbies.pop()
console.log(person3.hobbies);//(2) ['sports', 'coding']
console.log(person2.hobbies);//(3) ['sports', 'coding', 'singing']\
// now even the nested level properties are copied and have different reference pointers 


//-------->
const cat = {name:'Moew', hobbies:['eat', 'poop','sleep']}
console.log(cat);//{name: 'Moew', hobbies: Array(3)}
const cat1 = {...cat}
console.log(cat1);//{name: 'Moew', hobbies: Array(3)}
cat1.hobbies.pop();
console.log(cat.hobbies);//(2) ['eat', 'poop']
console.log(cat1.hobbies);//(2) ['eat', 'poop']
const cat2 = {...cat1, hobbies : [...cat1.hobbies]};//this even copies the nest properties
cat2.hobbies.push('sleep');
console.log(cat2.hobbies);//(3) ['eat', 'poop', 'sleep']
console.log(cat1.hobbies);//(2) ['eat', 'poop']