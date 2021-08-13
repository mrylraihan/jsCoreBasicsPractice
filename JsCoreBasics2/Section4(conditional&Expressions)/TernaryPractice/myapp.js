/*
With if else conditoionals you cant store the result for example 

const userName = if(isLogin){
    return 'Max';
}else{
    return null;
}
if statements dont return any values
This will result in a syntax error 

now with ternary operators it allows us to solve this problem 

const userName = isLogin ? 'Max':null;
Ternary Operator syntax
const variableName = variable your checking ? if true : if false;

*/

let isLogin = 'Max';

const userName = isLogin ? 'Max': null;
console.log(userName);

//if statements cant return but they can assign;the below is valid 
// if (isLogin) {
//     isLogin = 'Wallie';
// }else{
//     isLogin = null;
// }

// console.log(isLogin);
// you can use the or operator to assign default values to variables 
// example the userInput is a falsy because its a empty string 
//
const userInput = '';
const isValidInput = !userInput;//not falsy because ! negates = truthy

console.log(isValidInput);//true

const userName1 = userInput || 'wallie';// falsy or string the string is truthy so it 
//gets assigned the string 

console.log(userName1);// wallie

// if you want to get a true false you need to use a double !!
const userInput1 = '';
const isValidInput1 = !!userInput1;// this will return a true false 

console.log(isValidInput1);//false

//you can use shorthand operators to assign default values

const realUserInput = 'Wayel';

const newUserInput = realUserInput || 'wallie';// it checks the first truthy value
// if it was switched around and 'wallie' was before realUserInput then it would have assigned it 
//wallie because it was the first truthy value

console.log(newUserInput);//wayel

//we can also use && to assign values 
// it checks the first value to know whether to move on to the next 
//if the first value is true it will always return teh second value
//if the first value is false it will always return the first value
let isLoggedIn = true;

const shoppingCart = isLoggedIn && ['books'];

console.log(shoppingCart);