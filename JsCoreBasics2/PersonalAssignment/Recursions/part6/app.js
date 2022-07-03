console.log('im working!');
//use recursion to count from 10 - 0 
// The act of a function calling itself, recursion is used to solve problems that contain smaller sub - problems.A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

// function countUp(number){
//     if(number === 10){
//         console.log(number);
//         return
//     }else{
//         console.log(number);
//         return countUp(number + 1)
//     }
// }

// countUp(0)

// const array1 = [1,2,3,4,5]
// let count = 0 
// // theres 2 things you need for recursion, 
// //1. base case 
// //2, recursive call 
// function countArray(arr, index){
//     if(index === arr.length - 1){ //base case , what end your recursive call 
//         count += arr[index]
//         return 
//     }
//     count += arr[index]
//     return countArray(arr, index+1)//recursive call, is what is used to call you function again , but with an increased or decreased new value, if theres no increment or decrement you will be caught in an infinite loop
    
// }
// countArray(array1, 0)
// console.log(count);

// find the biggest number in a an array 

const arr2 = [1,2,3,10,4,5]

let biggestNum = 0
function findBiggestNum(arr, index){
    //base case
    if(index === arr.length - 1){
        if(arr[index]>biggestNum){
            biggestNum = arr[index]
        }
        return biggestNum
    }else{
        if (arr[index] > biggestNum) {
            biggestNum = arr[index]
        }
        //recursive call 
        return findBiggestNum(arr, index + 1)
    }

}   

const result = findBiggestNum(arr2, 0)

console.log(result);