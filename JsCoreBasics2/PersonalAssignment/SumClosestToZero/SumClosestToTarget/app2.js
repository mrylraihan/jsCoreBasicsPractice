// 0,1,2,3,4,5
const testArr1 = [2, -3, 4, -2,4, 10, 9, 9,0]
// console.log(array1.indexOf(2))

const closestNumToo = (array1, target)=>{
    let total = array1[0] + array1[1]//5
    if(total === target) {
        console.log(total +'='+ ''+ array1[0] +'+'+ array1[1]);
        return 
    }else{
        array1.forEach(ele1 => {
            array1.forEach(ele2 => {
                if (array1.indexOf(ele1) !== array1.indexOf(ele2)) {
                    let sum = ele1 + ele2
                    let nonNegNum = Math.abs(sum)
                    if ((nonNegNum-target) < Math.abs(total-target)) {
                        console.log(ele1 + ele2 + '= ' + ele1 + ' + ' + ele2);
                        total = sum
                    }
                }
            })
        })
        
        console.log(total);
    }
}

closestNumToo(testArr1, 10)

// this is broken 