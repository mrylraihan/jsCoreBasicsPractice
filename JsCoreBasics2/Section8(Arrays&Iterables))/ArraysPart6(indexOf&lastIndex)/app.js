// how to find the index of a specific item, with indexOf();
//indexOf(searchElement: number, fromIndex?: number):


const testResult = [1, 2, 3, 4, 5, 6, 7]
console.log(testResult.indexOf(3));//this will log the index 3 is located which is index 2
//or 
console.log(testResult.indexOf(3,5));// the second param tells us from which index to start searching on 
// this will log -1 if the item is'nt found it will return a negative 1

//now if we have the item more then once it will stop when we found the first item 
const testResult2 = [1,2,3,4,5,6,2];
console.log(testResult2.indexOf(2));// this will log just the first item location which is index 1
// for us to find the second we need to pass a param index of passed the first one 
console.log(testResult2.indexOf(2, (testResult2.indexOf(2))+1));// this will log 6 
// this is because the second param is first index plus which pass the first item. 


//If we want to start our search from the right we can use lastIndexOf();

console.log(testResult2.lastIndexOf(2));// this will start our search from the right finding the second first 
// this will log 6 

//objct that have a reference can be located but objects with out a reference cant 
const objectList = [person1 = {name:'wallie'}, person2={name:'heshow'}];
console.log(objectList.indexOf(person2));//this will log index 1 because it has a reference 

const personalData = [{name:'wallie'},{age:29}];
console.log(personalData.indexOf(name));// this will log -1 because it wont be able to find an object with out an reference 

//this is how we find the index of a specific item