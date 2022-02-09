const myForEach = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        func(array[i], i, array)
    }
}
const arrayTest = ['a', 'b', 'c', 'd', 'e', 'f']
myForEach(arrayTest, (val, index, array)=>{
    console.log(val);
})

// takes an array
// invokes a callback function on every value of the array
// what ever the call back return just put in to a new array 
// map returns the new array of mapped values

const myMap = (array, func) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
         newArray.push(func(array[i], i, array))
    }
    return newArray
}

const howMapWorks = myMap(arrayTest, (val, index, array) => {

    return ` hello ${val}`
})

console.log(howMapWorks);

// how call backs work 
const cb = ()=>{
console.log('hello');
}

const otherCb = (a)=>{
    a()
}
otherCb(cb)

// filter 
const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }

const myFilter = (array, func) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array)){
            newArray.push(array[i])
        }
    }
    return newArray
}


const howFilterWorks = myFilter(ages, (val, index, array)=>{
    return val >= 18 
})

console.log(howFilterWorks);

// how reduce works

const numList = [1, 2, 3, 4, 5]
                                                            // , initial starting point 
const reducedValue = numList.reduce((preV, curV)=>{ return preV += curV}, 0)
console.log(reducedValue);
