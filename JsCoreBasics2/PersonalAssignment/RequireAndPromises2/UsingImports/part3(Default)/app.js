// when importing a defqult method we can use these way if 
//theres a naming confliction 
// import {default as test } from './app2.js'

import test from './app2.js'
import {sayHi} from './app2.js'

test()

sayHi()