const intArray = [1, 2, 3, 4, -2, 0, -5]

let total = intArray[0] + intArray[1]
// console.log(total);
let a, b = 0 

const getLowestSum = (arr)=>{

    arr.forEach(num1 => {
        arr.forEach(num2=>{
            if(arr.indexOf(num1) !== arr.indexOf(num2)){
                // // closest to 0
                let subtotal = num1 + num2
                console.log('Subtotal '+subtotal+'= '+num1+' + '+num2);
                const fullN = Math.abs(subtotal)
                console.log(fullN+' using Math.abs()');

                if(Math.abs(total)>fullN){
                // if(total>Math.abs((num1 + num2))){
                // if(total>(Math.abs(num1) + Math.abs(num2))){
                    total=num1+num2
                    console.log(total);
                    a = num1
                    b = num2
                }else{
                }
            }
            return [total, num1, num2]
        })

    });
    return [total, a, b]

}

console.log(getLowestSum(intArray))



// my answer that i came up with and changed the one on top 
//                 // 0,1,2,3,4,5
// const array1 = [-7, 2, 3, 4, 5, 6, 10, 9, 9]
// // console.log(array1.indexOf(2))

// let total = array1[0] + array1[4]//6

// array1.forEach(ele1 => {
//     array1.forEach(ele2 => {
//         if (array1.indexOf(ele1) !== array1.indexOf(ele2)) {
//             let sum = ele1 + ele2
//             let nonNegNum = Math.abs(sum)
//             if (nonNegNum < Math.abs(total)) {
//                 console.log(ele1 + ele2 + '= ' + ele1 + ' + ' + ele2);
//                 total = sum
//             }
//         }
//     })
// })

// console.log(total);