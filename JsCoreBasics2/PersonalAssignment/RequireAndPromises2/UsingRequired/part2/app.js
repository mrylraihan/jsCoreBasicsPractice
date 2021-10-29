// const app2 = require('./app2.js')
// if your requiring one method Js your required method will be stored in a single variable
// if your requiring more then one method from a file it will store in a object
const test = require('./app2.js')

// multiple methods stored in a single object 
//we use teh dot notation to access the methods required
// app2.sayHi();
// app2.sayBye();
// app2.test();
test()