//Slice method is only avaiable for real arrays this is an example of when you would want 
//to convert an iterable or aarylike object to an array with the Array.from() method
const str = 'hello';
const letters = Array.from(str);

console.log(letters);//(5) ["h", "e", "l", "l", "o"]

letters.splice(0,1,'m');
console.log(letters);//(5) ["m", "e", "l", "l", "o"]



//lets see if we can do it to a arraylike object 
console.log(str);//hello
// str.splice(0,1,'m');//this will error because its not a real Array 
//this is why we need to convert it with Array.from
