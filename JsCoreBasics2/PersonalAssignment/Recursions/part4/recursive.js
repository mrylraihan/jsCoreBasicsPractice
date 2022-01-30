'use strict'
// we need to identify
// the base case
// the action
// recursive case
const word = 'star'

const reverseString = str => {
  // base case string is empty
  if (str === '') {
    // console.log('???')
    return ''
  } else {
    // actions - gets closer to the base case
    const firstCharacter = str.charAt(0)
    const remainingString = str.substr(1)

    console.log(`${firstCharacter}: ${str} (string passed in)`)

    // recursive invocation
    const returnValue = reverseString(remainingString) + firstCharacter
    console.log(`${firstCharacter}: ${returnValue} (returned string)`)

    return returnValue
  }
}

console.log(reverseString(word))
