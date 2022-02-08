                // 0,1,2,3,4,5
const array1 = [-7,2,3,4,5,6,10,9,9]
// console.log(array1.indexOf(2))

let total=array1[0]+array1[4]//6

array1.forEach(ele1=> {
    array1.forEach(ele2=>{
        if(array1.indexOf(ele1)!==array1.indexOf(ele2)){
          let  sum = ele1 + ele2
          let nonNegNum = Math.abs(sum)
           if(nonNegNum<Math.abs(total)){
               console.log(ele1+ele2 +'= '+ele1+' + '+ele2);
               total = sum
           }
        }
    })
})

console.log(total);
