const obj = {
    cell : [1,2,3,4,5]
}
console.log(obj['cell'][0]);//bracket
console.log(obj.cell[0])//dot 

const obj2 = {
    age: 22,
    name:'mike'
}

console.log(obj2['age']);//2
console.log(obj2['name']);//mike

// two ways we can access and create properties in our object is with the dot notation or teh bracket notation either works

obj2['newStuff'] = 'stuff'// this will create a property is it doesnt exist in our object  
obj2.hobbies = ['cooking', 'cleaning']
console.log(obj2.hobbies);//['cooking', 'cleaning']
console.log(obj2);



const stuff = 'stuff'
const table = 'table'
// how to add properties to an empty object using array(square bracket) notation
let objt = {}//empty object
//the value of stuff will be our key and the value of table will be our value 
//creating our key value pair
objt[stuff] = table
console.log(objt);//{stuff: 'table'}