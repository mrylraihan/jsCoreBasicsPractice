// // 0,1,2,3,4,5
// const testArr1 = [2, -3, 4, -2,4, 10, 9, 9,0]
// // console.log(array1.indexOf(2))

// const closestNumToo = (array1, target)=>{
//     let total = array1[0] + array1[1]//5
    
//         array1.forEach(ele1 => {
//             array1.forEach(ele2 => {
//                 if (array1.indexOf(ele1) !== array1.indexOf(ele2)) {
//                     let sum = ele1 + ele2
                   
//                     if (newSum< total) {
//                         console.log(ele1 + ele2 + '= ' + ele1 + ' + ' + ele2);
//                         total=sum
//                     }
//                 }
//             })
//         })
        
//         console.log(total);
//     }

// closestNumToo(testArr1, 10)

// // this is broken 

const reverseArrayInPlace = function (array) {
    var arrLength = array.length;
    for (i = 0; i < arrLength; i++) {
        array.splice(i, 0, array.pop());
    }
    return array
}

console.log(reverseArrayInPlace([1,2,3]))