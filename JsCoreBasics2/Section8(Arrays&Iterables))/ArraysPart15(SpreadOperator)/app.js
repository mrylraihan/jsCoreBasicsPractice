//Spread operator [...], its like teh rest operator(...)
// the spread operator is an operator that in the end pulls out all 
//elements of an array and gives them to you as a standalone list of elements
//it pulls out each element in to the new array and create a new standalone array 

const nameFrags = ['Wallie', 'raihan'];
const copiedNameFrag = [...nameFrags];
console.log(copiedNameFrag);//(2) ['Wallie', 'raihan']
copiedNameFrag[0] = "Wayel";
console.log(nameFrags);//(2)[('Wallie', 'raihan')]
console.log(copiedNameFrag);//(2) ['Wayel', 'raihan']

//Spread operator works with strings 
const name = 'Wallie';
const copiedName = [...name];// this take each element in the string an adds them to the array 
console.log(copiedName);//(6) ['W', 'a', 'l', 'l', 'i', 'e']

//Spread operator in functions 
//the spread operator allows you to go through each element 
const numlist = [1,2,3,4,5];
console.log(Math.min(...numlist));// logs : 1 ,pulls out each ele from the array and picks
//the smallest number 

//Spread with objects 
//this 

const person = [{name:'Max', age:20}, {name:'Manny', age:31}];
const copiedPersons = [...person];
console.log(copiedPersons);//(2) [{name:'Max', age:20}, {name:'Manny', age:31}]
person.push({name:'Anna', age:23});
console.log(person);//(3) [{name:'Max', age:20}, {name:'Manny', age:31}, {name:'Anna', age:23}]
person[0].age = 36;// this will affect the copiedperson object because its coping the reference the spread operator is not creating a new object 
console.log(copiedPersons);//(2) [{name:'Max', age:36}, {name:'Manny', age:31}]
