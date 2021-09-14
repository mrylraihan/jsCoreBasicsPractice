//object Destructuring

//syntax
//const objectEx = {a:something , b:something2}
// const {a, b} = objectEx
//a = something
//b = something2

// its very similer to array destructuring 
const array =['wallie', 'raihan'];
const [fName, lName] = array
console.log(fName);//wallie
console.log(lName);//raihan

//now with objects we need to use the curly bracets {}
const person = {name:'Wallie', age:29};

let {name, age} = person;

console.log(name, age);// you can only use the name of the key of the property
//Wallie 29
const anotherPerson = {name:'Yl', age:30}
const {name : n, age : a} = anotherPerson// this is another way to assign propterties and destructure 
//at the same time
//if you assign them like {name = n, age = a} you will have a clash with previously set constants with the name variable an age variable

console.log(n, a);//Yl 30

// we can also set a default variable if the object doesnt have that property 
//example
const person1 = {name:'Mike', age:39 , gender: 'male'};
const {name:fullName, age: years, gender = 'unknown'} = person1; // the default value for gender will get overridden by the objects value, but if the object didnt have that value or property it would have
//defaulted to our value 'unknown'
console.log(fullName, years, gender);//Mike 39 male


//===========================>
//you can also destructure with a function 
const cat = {eat: 'food', loves: 'sleep'}//our object
function catDestructuring({eat, loves}) {// in the parameters we ad the curly bracets the same way we
    //object destructure 
    console.log(`the cat loves to ${loves}, and ${eat}`);
}

catDestructuring(cat)//the cat loves to sleep, and food