// If we importing multiple functions we would use these method of importing 
// because it will take all the functions we exported from that file(* means) 
// and store them in the object we create after as in this case we have app2 as
//the name , we can name it anything
// import * as app2 from './app2.js'
import {sayHi, sayBye, test} from './app2.js'

// if we stored them all in a object with * and as something in this case app2
// we would use the dot notation
// app2.sayHi();
// app2.sayBye();
// app2.test();
sayHi()
sayBye()
test()
