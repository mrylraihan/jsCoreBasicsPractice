//Concat method allows you to add elements to the end of the array or arraylike object while copying it 
//as you can see it doesnt affect the original str
//the .concat() adds the new elements and returns a new array with the newly added elements

const str = 'hello';
console.log(str);//'hello'
const strS= str.concat('s');//'hellos'
console.log(str);//'hello'
console.log(strS);//'hellos'

const testResult = [1,2,3,4,5,6,7];
console.log(testResult);//(7) [1, 2, 3, 4, 5, 6, 7]
const newTestResults = testResult.concat(8,9);
console.log(testResult);//(7) [1, 2, 3, 4, 5, 6, 7]
console.log(newTestResults);//(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newTestResults2 = newTestResults.concat(10,11);//This adds the elements to the end and 
//returns the new array with the added elements
console.log(newTestResults2);
