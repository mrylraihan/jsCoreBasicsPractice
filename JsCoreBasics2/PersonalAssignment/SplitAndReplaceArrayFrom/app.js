const word = 'The-quick-brown-fox-jumps-over-the-lazy-dog.-If-the-dog-reacted,-was-it-really-lazy?';
// Split
const wordArr = word.split('-')
console.log(wordArr)
const newWord = wordArr.join(" ")
console.log(newWord)
console.log(word)
// Replace
const replacedWord = word.replace('-',' ')//replaces 1
console.log(replacedWord)
console.log(word)
// ReplaceAll
const replaceAllWord = word.replaceAll('-',' ')//will replace all
console.log(replaceAllWord)


// Array.from
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
const arr = [1,2,3,4,5]
let arrayFrom = Array.from(arr)

console.log(arr, 'original')
console.log(arrayFrom, 'new copied arrs')
arrayFrom[2]= "test"
console.log(arr, 'original')
console.log(arrayFrom, 'new copied arrs')

// you can pass in a map function as the second argument, 
// a map function is a function that runs on every element,to 
//return a transformed array
let wordArrTest = Array.from(word, (e)=>e.charCodeAt())
console.log(wordArrTest)
let wordArrSorted = Array.from(word, e=>{return{char:e}})
console.log(wordArrSorted)