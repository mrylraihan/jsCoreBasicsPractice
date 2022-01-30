'use strict'
// eslint-disable-next-line no-unused-vars
const target = 10
// loop to 10

// Code along starts here
for (let i = 0; i < target; i++) {
  console.log(i)
}
console.log('loop is done!')

// recursive way

const loop = (num) => {
  // base case -- condition that stops the recursion
  if (num >= 10) {
    // action -- drives us clear to the base
    return
  }
  console.log(num)
  // recursive case -- continue the logic again
  return loop(num + 1)
}
loop(0)

// Another example
console.log('another Example')

function countDownRecursive (n) {
  if (n <= 0) {
    console.log('Hooray')
    return
  }
  console.log(n)
  return countDownRecursive(n - 1)
}

countDownRecursive(3)
