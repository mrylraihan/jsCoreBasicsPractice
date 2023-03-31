const arr1 = [1,2,3,4,5,6,7]

function printEle(ele,idx,arr){
    console.log(idx,":",ele)
    if(idx == arr1.length-1)console.log(arr)
}

// the forEach takes a call back as argument, typically it will be an anonymous function 
// also has 3 parameters first being the element, then idx, then the array
// arr1.forEach(printEle)

// arr1.forEach(ele=>console.log(ele))


// forEach doesnt return anything
const test = arr1.forEach(ele => ele)// will return undefined

console.log(test)

let word = 'word'
word = word.split('')
word.forEach(ele=>console.log(ele))

// forEach only works with arrays 

let sum = 0;

let numbers = [1,2,3,4,5];

numbers.forEach(ele=> sum += ele);
console.log(sum)

// just because it doesnt return anything it doesnt mean it doesnt do stuff.
