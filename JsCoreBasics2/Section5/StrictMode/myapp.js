// Reassigning and redeclaring

//redeclaring
var userName = 'Mike';
var userName = 'M';
//redeclaring a variable is when you use keyword let, const, var again on the variable name 
// let userName1 = 'Wayel';
// let userName1 = 'W';
// This will give us an error stating that the variable has already been declared
//wiuth let and const we cant redeclare variables 


//Reassinging 
let userName1 = 'Wayel';
userName = 'W';


//missing the var, let , or const keyword
userName2 = 'Garrette'// this automatically adds var to the variable name 
//var username2 = 'Garrette';
console.log(userName2);



//this will not js to be so forgiving if we forget variable types
'use strict';
userName3 = 'mike';
console.log(userName3);