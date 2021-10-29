// here we are aggregating all of our modules to a helper.js 
// file to keep them all in one place 
// the importing it here!
import * as helper from './helper.js'
// or
import {sayHi, sayBye, test, testAggregate} from './helper.js'

helper.sayHi()
helper.sayBye()
helper.test()
helper.testAggregate()
sayHi()
sayBye()
test()
testAggregate()