//Spread operator
const array = [1,2,3]
const array2 = [4,5,6]
const array3 = [...array,...array2]
console.log(array3);//[1, 2, 3, 4, 5, 6]

//this takes out each element one by one spreading them apart 
console.log(...array3);//6 1 2 3 4 5 6

//you can use teh spread operator to make direct copies of other objects
const array4 = [...array3]
console.log(array4);//[1, 2, 3, 4, 5, 6]
array4[4] = 'w'// we change index 4s context with out changing the array3
// they are'nt connected because its a real copy, so different reference pointer 
//as well 
console.log(array4);// [1, 2, 3, 4, 'w', 6]
console.log(array3);////[1, 2, 3, 4, 5, 6]


//Spread for objects
const obj = {
    a:1,
    b:'Test'
}

console.log(obj);//{a: 1, b: 'Test'}


const obj1 = {
    ...obj,
    c:'own'
}
// this takes the key and value pairs to its own
console.log(obj1);//{a: 1, b: 'Test', c: 'own'}


// Rest operator
//takes all params and turns it to a array 
function sum(...nums) {
	console.log(nums) //) [5, 6, 7]
}

sum(5,6,7)//) [5, 6, 7]