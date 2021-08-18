//Primitive Vs Reference Values

/*two categoriies of types/values in javascript
primitive values are 
-String, Number, Boolean, null, undefined, Symbols
-stored in memory(normally on the stack), variables stores values itself
-copying a variable(= assign to different variable)copies the value
*/
//example

let name = "Wallie";

console.log(name);//Wallie

let anotherName = name;//this copies the value thats in name into anotherName

console.log(anotherName);//Wallie

name = 'W';//we are reassigning name to a new value

console.log(name);//W

console.log(anotherName);//Wallie this is because the previous value was already copied into anotherName



/*
reference values are
all other objects
-Stored in memory (heap), variables stores a pointer(address) to location
-in memory
-copying a variable(=assign to a different variable) copies the pointer/reference
*/

//example

let hobbies = ['sports'];
console.log(hobbies);//['sports']
let newHobbies = hobbies
console.log(newHobbies);//['sports']
//now let push a new element in hobbies
hobbies.push('cooking');
console.log(hobbies);//["sports", "cooking"]
//and now if log newHobbies we will see that it is also changed
console.log(newHobbies);//["sports", "cooking"]

//this is because its coping the address to the object so both 
// hobbies and newHobbies are connected to the object becausethey hold the same pointer

newHobbies.push('coding')//pushing it to newHobbies 
console.log(hobbies);//["sports", "cooking", "coding"] it will reflect in hobbies 


//this works with other objects

let person = {age:30};

let anotherPerson = person;

anotherPerson.age = 32;

console.log(person.age);//32


//how to create a real copy of objects by using the spread operator
//the spread operator pulls out alll the keyvalue pairs or elements and adds them 
//to the new object

let yetAnotherPerson = {...person};
console.log(yetAnotherPerson);//{age:32}
yetAnotherPerson.age = 30;

console.log(yetAnotherPerson);//{age:30}
console.log(person);//{age:32}

// you can do the same thing for arrays because they are object as well

let morehobbies = [...hobbies];

//this will copy each element into the new array 
console.log(hobbies);//["sports", "cooking", "coding"]
console.log(morehobbies);//["sports", "cooking", "coding"]

//now we are going to pop in morehobbies

morehobbies.pop();
console.log(morehobbies);//["sports", "cooking"], this is now its own new array, 
//and not connect to the memory address to hobbies 
console.log(hobbies);//["sports", "cooking", "coding"]


const person1 = {age:30};//these are two different objects even though the data is the same
const person2 = {age:30};// they have two different pointers and addresses in memory

//even if you try to compare them even though they have the same values
//they are considered different objects 

console.log(person1 == person2);//false
console.log(person1===person2);//false

//now person1 is a const so you would think that we can change the values or qadd more key value pairs
//but you can the const for an object just reference to its address in memory 
//example

person1.name = 'WR';// this doesnt error, this works the same with arrays as well because they are objects
console.log(person1.name);//wr

//but if you try to reassign the object or array you will get an erro

// person1 = {name:'mikey', age:32}; this will error because the const 
//variable cant reassign to another place in memory and address pointer 
//this would be changing that which you cant for const