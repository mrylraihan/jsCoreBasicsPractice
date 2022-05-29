// const numberList = [3, 6, 8, 0]
// const numberList1 = [1, 2, 3, 4]

// function sortingArrays(numList) {
//     let flag=0// false
//     let i = 0
            
//     while (i <= numList.length){
//         if(numList[i]>numList[i+1]){
//             flag = 1
//         }
//         i++
//     }
//     if(flag){
//         console.log('no its not sorted');
//     }else{
//         console.log('yes is sorted');
//     }
// }
// sortingArrays(numberList)


// another way 
// const arr = [4,7,0,3]
// const arrSorted = [...arr] 
// for (let i = 0; i < arrSorted.length; i++) {
//     for (let j = 0; j < arrSorted.length; j++) {
//         if (arrSorted[j] > arrSorted[j+1]){
//            let temp = arrSorted[j+1] //0
//            arrSorted[j + 1] = arrSorted[j]
//            arrSorted[j] = temp
//        }
        
//     }
// }
// console.log(arr.join() === arrSorted.join());
// console.log(arr);
// console.log(arrSorted);

// another way 
// const sortingArr = (a)=>{
//     let unsorted = a
//     let sortedArray = a.sort()
//     if(unsorted == sortedArray){
//         console.log(true)
//     }else{
//         console.log(false)
//     }

// }

// const arr2 = [4,5,6,7]
// let highest = arr2[0]
// for (let i = 0; i < arr2.length; i++) {
//     let cur = arr2[i];
//     if(highest<cur){
//         highest = cur;
//     }
    
// }

// console.log(highest);


const nestedArray = [1, 2,[3,4 ,5 ,6],7 ]

nestedArray.forEach(ele=>{
    if(ele.length>0){
        ele.forEach(ele2=>{
            console.log(ele2);
        })
    }
    // if (ele.length < 1) console.log(ele);
    console.log(ele);
})