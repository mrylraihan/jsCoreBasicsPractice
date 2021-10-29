export { testAggregate } from './app3.js'
export { sayHi, sayBye, test } from './app2.js'

// we both importing all the functionality from the different modules 
// and get them ready for exporting 
// we can have all our exported modules on this page to aggregate it to one place
// this helper.js serves as a bridge between all the imports you want to use 
// to your main file 