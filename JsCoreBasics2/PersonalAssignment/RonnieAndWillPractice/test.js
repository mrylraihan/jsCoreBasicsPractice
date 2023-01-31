const test = [1,2,3,4]//different skills


const arr = [1,2,3,4,5,6,7,8]//list of skills
count = 0

test.forEach(ele=>{
    if(arr.includes(ele)){
        count += 1
    }
})
console.log(count)

