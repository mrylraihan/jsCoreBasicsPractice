// Regular Expressions 
// ^ = start from left
// S = anykind of word
// + = plus
// @ = specific @ symbal
// S = anykind of word
// + = plus
// . = . 
// S = anykind of word

// email validation 

const regex = /^\S+@\S+\.\S+$/
// we can do it this way too
// const regex1 = new RegExp("^\S+@\S+\.\S+$")
// to test a regex we use a test method 

 const test1= regex.test('mr.raihan@gmail.com')
//  const test2= regex1.test('mr.raihan@gmail.com')
console.log(test1);//true

//this will check for hello only, just see if its in the expressions 
const regHello = /hello/
const test2 = regHello.test('hello')
console.log(test2);//true
const test3 = regHello.test('Hey there, and hello')
console.log(test3);//true
const test4 = regHello.test('Hey there')
console.log(test4);//false
const test5 = regHello.test('Hello')
console.log(test5);//false

// you can make it more flexible

// checks for hello but the h can be H or h
const regHello2 = /(h|H)ello/
const test6 = regHello2.test('Hello')
console.log(test6);//true
const test7 = regHello2.test('hello')
console.log(test7);//true

console.log(regHello2.exec('hello'));//['hello', 'h', index: 0, input: 'hello', groups: undefined]
console.log(regHello2.exec('nello'));