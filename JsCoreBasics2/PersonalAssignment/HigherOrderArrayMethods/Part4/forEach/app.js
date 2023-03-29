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