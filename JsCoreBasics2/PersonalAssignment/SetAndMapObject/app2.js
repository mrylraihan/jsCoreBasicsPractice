//Working with sets
const myArray = [1,2,3,3,4];
console.log(myArray);//[ 1, 2, 3, 3, 4 ]
const setArray = new Set(myArray);
console.log(setArray);//Set(4) { 1, 2, 3, 4 }Only stores unique values meaning no doubles
//Set is used to remove all dups from an array.

//to convert it came to an array we will use the spread operator
const uniqueArray = [...setArray];
console.log(uniqueArray);//[ 1, 2, 3, 4 ]

//how to add and delete to a set 

setArray.add(6);//adding 6 to the set 
console.log(setArray);//Set(5) { 1, 2, 3, 4, 6 }

setArray.delete(6);//deleting 6 from the set
console.log(setArray);//Set(4) { 1, 2, 3, 4 }

//how to check if you set has a element 
const answer = setArray.has(3);
const answer2 = setArray.has(11);
console.log(answer);//true
console.log(answer2);//false
//sinces set is an unorder index we can retrieve specific elements the way we do with arrays

//running loops to log you set 
const anotherSet = new Set([1,2,3,4]);
anotherSet.add(11);
setArray.forEach(element => {
	console.log(element);//will log each element in your array 
});
//1,2,3,4,11

anotherSet.clear()//returns an empty set
console.log(anotherSet);//Set(0) {}

//last of all we can check the length with size 

console.log(setArray.size);//4 is the length 

//---------------------------------------------------------------------------------->


//Maps object hold key value pairs and remembers the original insertion order of the keys
//you can even use objects as keys 
//const myMap = new Map([[key,value]]) ,or ([[key,value],[key,value]])
const myM = new Map([['name', 'joe']])//Map(1) { 'name' => 'joe' }
console.log(myM);
const myMap = new Map([['name', 'joe'], ['surname', 'doe']])//Map(2) { 'name' => 'joe', 'surname' => 'doe' }
console.log(myMap);


//---------------------------->
const myObject = {};
console.log(myObject);//{} empty object

const a = {};
const b = {};
const c = {};
myObject[a] = 'a';
console.log(myObject);//{[object Object]: 'a'}
myObject[b] = 'b';
console.log(myObject);//{[object Object]: 'b'}

const objectMap = new Map([[a, 'a'], [b, 'b']]);
console.log(objectMap); //Map(2) {{…} => 'a', {…} => 'b'}
objectMap.set(c, 'c')
console.log(objectMap);//Map(3) {{…} => 'a', {…} => 'b', {…} => 'c'}

//map also deletes by key for example
objectMap.delete(c);
console.log(objectMap);//Map(2) { {} => 'a', {} => 'b' }