const test = [1,2,3,4]//different skills


const arr = [1,2,3,4,5,6,7,7,8]//list of skills
count = 0

test.forEach(ele=>{
    if(arr.includes(ele)){
        count += 1
    }
})
console.log(count)


const uniqueValues = Array.from(new Set(arr))
// const uniqueValues = Array.from(new Set(arr))//will convert to a set remove unique value then convert back to an array
console.log(uniqueValues)
//new set 
console.log('new set')
const arr2 = [11,2,2,3,4,4]
console.log(arr2)
const setArr = new Set(arr2)
console.log(setArr)
//looping through a set
setArr.forEach(ele=>console.log(ele))
