// Floating point numbers
const a = 0.2
const b = 0.4

let c = a + b// this should equal 0.6
console.log(c);// 0.6000000000000001
console.log(c === 0.6)// but this return false 
// why

console.log((c).toString(2));//0.100110011001100110011001100110011001100110011001101

const aFixed = (0.2).toFixed(2)
const bFixed = (0.4).toFixed(2)
console.log(aFixed)//0.20
console.log(bFixed)//0.40

let cFixed = aFixed + bFixed
console.log(cFixed === 0.60);//false
// when working with floating point numbers we will get too many 
//imprecisions, but with integers we dont so what we need to do is 
//convert to an integer number we do this by multiplying by 100
// 

// Integers

const num1 = 2
const num2 = 4

let num3 = num1 + num2// 6
console.log(num3 === 6);//true