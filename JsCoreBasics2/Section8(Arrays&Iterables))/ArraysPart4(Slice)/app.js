//Slice method that allows you to create a copy of an array without copying the reference pointer
//essentially creating a new copy of the array or array like object 
//.slice() will copy the whole array
//,slice(_,_) will allow you to select certian ranges of an array  
//.slice(param1, param2) param one will be what index you want to start copying(inclusive)
//param2 will be the index you want to end at (exculsive)

const str = 'hello';
const letters = str.slice();
console.log(letters);



const testResult = [1,2,3,4,5,6,7];
console.log(testResult);
const storedResults = testResult.slice();//this is a way to copy and create a brand new array with out copying the reference 
console.log(storedResults)
storedResults.push(33);// pushs to storedRsults and doesnt affect testResults
console.log(testResult);//(7) [1, 2, 3, 4, 5, 6, 7]
console.log(storedResults);//(7) [1, 2, 3, 4, 5, 6, 7, 33]

testResult.push(34);//pushed to testReults and doesnt affect storedReults
console.log(testResult);//(8) [1, 2, 3, 4, 5, 6, 7, 34]

//they are two seperate arrays 

//how to selct from a specific index
const just2Ele = storedResults.slice(0,2)//starts at index 0 and copies until index 2 ending at index 1
console.log(just2Ele);//(2) [1, 2]

//we can do this in reverse with negative values
const revserElements = storedResults.slice(-2,-1);//-2 starts at is starting from the end and lands on 7, -1 just means one to the left  
console.log(revserElements);//[7]
