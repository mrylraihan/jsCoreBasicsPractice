function returnArray(a,b) {
    return [a,b];// returns an array 
}

const returnedArrayed = returnArray(1,2)
// console.log(returnedArrayed);

//now if we want to destructure the array 

const [a, b] = [...returnedArrayed]
// console.log(a);
// console.log(b);


//  return in functions

// const test1 = function(a){
//     return a + 1 
// }

// const answer1 = test1(2)

// console.log(answer1);

// function test2 (a){
//     a + 1
// }
// const answer2 = test2(2)

// console.log(answer2);

                // 0,1,2,3,4,5
const array1 = [-7,2,3,4,5,6, 7]
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
