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
