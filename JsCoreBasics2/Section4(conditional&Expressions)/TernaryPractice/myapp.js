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

