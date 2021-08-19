/*
*/
//Function Statement 
function name(params) {
  console.log(params);
}
//Function expression
const f1 = function name(params) {
  console.log(params);
}
//Arrow Function

const f2 = (param)=>console.log(param);

//Arrow function General syntax:
//(arg1, arg2)=>{return ...}

//incases with no arguments
//()=>{...}

//incase of only one argument
//arg1 =>{...}

//incase you have a return you much use curly braces
//(arg1)=>{return arg1}

//incase one expression in the function body
//(arg1, arg2) => arg1 + arg2

//incase of more then one expression 
//(arg1, arg2)=>{
//   arg1 *=2;
//   return arg1 +arg2;
// }