//Spread Operator
// the spread operator allows you spread to contents of a variable

//this takes 3 parameters
function sum(a, b, c) {
    return a+b+c
}
const sumArray = [1,2,3]
//this will take out each element from the array 
//one by one and fill in the 3 params
const total = sum(...sumArray)
console.log(total);//6 


//You can also use it to spread variables/ Arrays apart
//in to new variables/ objects
const array= [1,2,3,4]
const [a,...b] = [...array]
console.log(a);//1
console.log(b);//[2,3,4]

//You can also use it to make real Copies
const copiedArray1 = [...array]
console.log(copiedArray1);//[1,2,3,4]

copiedArray1.push(5);
//doesnt affect the original Array 
console.log(copiedArray1);//[1, 2, 3, 4, 5]
console.log(array);// [1, 2, 3, 4]


//you can also use it for functions that expect you to pass in 
// multi values instead of an array 

const minArray = [2,3,4,5,56]
console.log(Math.min(minArray));//NaN
//this returns NaN because for this function you can pass in an array 
//you need to pass in multiple values

//now we pull each element from the array one by one with the spread operator
console.log(Math.min(...minArray));//2
//these methods does'nt work with arrays but numbers, the spread op takes each num out of the array
console.log(Math.max(...minArray));//52




//Copying an array of Objects
const person = [{name:'Max', age:30}, {name:'Wallie', age:30}]
const copiedPerson = [...person]
console.log(person);//[{name:'Max', age:30}, {name:'Wallie', age:30}]
console.log(copiedPerson);//[{name:'Max', age:30}, {name:'Wallie', age:30}]
copiedPerson.push({name:'Ryan', age:15})
console.log(person);//[{name:'Max', age:30}, {name:'Wallie', age:30}]
console.log(copiedPerson);//[{name:'Max', age:30}, {name:'Wallie', age:30},{name:'Ryan', age:15}]

//even though we are copying the objects we are working with reference values
// they are still pointing to the same object so if we change the copied 
//address in place in one array it will reflect in the other
//example

person[0].age = 28;
console.log(person[0].age);//28
console.log(copiedPerson[0].age);//28

//even though they are different arrays we copied the memory address to the 
//object reference values point to the object in memory


//making a real full copy of the objects in the array 
//not only the reference pointers 
const copiedObjectsArray = person.map(p=>({name:p.name, age:p.age}))

console.log(copiedObjectsArray);
copiedObjectsArray[0].age = 55
console.log(copiedObjectsArray[0].age);//55
console.log(person[0].age);//28