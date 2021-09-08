//Array destructuring 
//The destructuring assignment syntax is a JavaScript expression that makes it possible to
//unpack values from arrays, or properties from objects, into distinct variables.
//syntax: const [variableName1, variableName2] = Array//['mouse','cats'];
const nameData = ['Max', 'Schwartz'];
// const firstName = nameData[0];
// const secondName = nameData[1];
const [firstName, lastName] = nameData

console.log(firstName, lastName);//Max Schwartz

let a, b, rest;

[a,b] = [10,20];
console.log(a);//10
console.log(b);//20
const numlist = [10,20,30,40,50];
[a,b,...rest] = numlist;//using the rest operator to collect the rest of the elements
console.log(a);
console.log(b);
console.log(rest);//(3) [30, 40, 50]
numlist[4] = 25;
console.log(numlist);//(5) [10, 20, 30, 40, 25]
//let see if it affects rest 
console.log(rest);//(3) [30, 40, 50] it doesnt affect rest


//you can also do this with objects

const person = {name:'wallie', age:29, gender:'Male'};
let {name, age, gender = 'unknown'} = person;// we created a default value gender but it can get overridden
console.log(name);//wallie
console.log(age);//29
console.log(gender);//Male

// you can also use this in functions 

function saySentence({name, age}){
    console.log(`hey im ${name}, and im ${age}`);
}

saySentence(person)//hey im wallie, and im 29
