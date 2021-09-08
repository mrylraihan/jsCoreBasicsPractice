//Splice method is only available for real arrays this is an example of when you would want 
//to convert an iterable or array like object to an array with the Array.from() method
const str = 'hello';
const strArray = Array.from(str);

console.log(strArray)//(5) ["h", "e", "l", "l", "o"]

strArray.splice(0, 1, 'm')
console.log(strArray)//(5) ["m", "e", "l", "l", "o"]



//lets see if we can do it to a array like object 
console.log(str);//hello
// str.splice(0,1,'m');//this will error because its not a real Array 
//this is why we need to convert it with Array.from


const numberlist = [1,2,3,4,5,6];
console.log(numberlist);//(6) [1, 2, 3, 4, 5, 6]
const splicedElement = numberlist.splice(2, 1, 8)
console.log(numberlist);//(6) [1, 2, 8, 4, 5, 6]

console.log(splicedElement);//[3]
//or if you dont want to delete anything just leave 
// the second parameter as 0

numberlist.splice(2,0,9);//(7)[(1, 2, 9, 8, 4, 5, 6)]
console.log(numberlist);



//splicing a string practice

const words  = "words";
const wordArray = Array.from(words);//converts the string to a word
console.log(words);
console.log(wordArray);

const splicedLetter = wordArray.splice(0,1,'m');//(5) ['w', 'o', 'r', 'd', 's']
console.log(splicedLetter);//[w]
console.log(wordArray);//(5) ['m', 'o', 'r', 'd', 's']
const mords = wordArray.join('');//joins the array to a string
console.log(mords);//mords