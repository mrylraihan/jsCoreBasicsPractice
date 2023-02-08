const numList = [1,2,3,4,0,5]
const targetNum = 9

const twoNumberSum = (array, targetSum) =>{
    for (let i = 0; i < array.length; i++) {
        let firstVal = array[i]
        for (let j = 1; j < array.length; j++) {
            let secondVal = array[j]
            //if the first val and second val equal target, and 
            //first val and second val are'nt the same 
            if (firstVal + secondVal === targetSum && firstVal != secondVal) {
                return [firstVal, secondVal]// if this condition is met return this
            }
        }
    }
    return [] // will return this as default if the conditional is'nt met
}
console.log(twoNumberSum(numList, targetNum))


function twoNumberSumSet(array, targetSum) {
    // Write your code here.
    const check = new Set()
    for (let num of array) {//loop through set
        //will take the first value in the set and subtract from target
        // the will look for the remainder in the set
        const found = targetSum - num 
        if (check.has(found)) {
            return [num, found]
        }
        check.add(num)
    } return []
}
function twoNumberSumSet2(array, targetSum) {
 
    const check = new Set(array)
    for (let num of check) {
        const found = targetSum - num 
        if (check.has(found) && found !==num) {
            return [num, found]
        }
    } return []
}
console.log(twoNumberSumSet2(numList, targetNum))