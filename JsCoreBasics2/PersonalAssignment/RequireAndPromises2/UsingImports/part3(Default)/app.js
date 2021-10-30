// when importing a defqult method we can use these way if 
//theres a naming confliction 
// import {default as test } from './app2.js'
// if u have a default export u can just use comma and add the rest of them in a object , that isnt the default 
import test, {sayHi} from './app2.js'
// import {sayHi} from './app2.js'

test()

sayHi()