import {test} from './app2.js'
//if you have a function with the same name you can store it in another 
// in your import statement 
import {test as testFunc} from './app2.js'

// and invoke it by using the new name 
testFunc()

// single imported function 
test()