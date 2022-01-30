const intArray = [1, 2, 3, 4, -3, 0, -5]

let total = intArray[0] + intArray[1]
// console.log(total);
let a, b = 0 

const getLowestSum = (arr)=>{

    arr.forEach(num1 => {
        arr.forEach(num2=>{
            if(arr.indexOf(num1) !== arr.indexOf(num2)){
                // closest to 0
                if(total>(Math.abs((num1, num2)))){
                // if(total>(Math.abs(num1) + Math.abs(num2))){
                    total=num1+num2
                    console.log(total);
                    a = num1
                    b = num2
                }
            }
            return [total, num1, num2]
        })

    });
    return [total, a, b]

}

console.log(getLowestSum(intArray))

// closest to 0 


// function minAbsSumPair(arr, arr_size) {
//     var inv_count = 0;
//     var l, r, min_sum, sum, min_l, min_r;
    
//     /* Array should have at least
//     two elements*/
//     if (arr_size < 2) {
//         document.write("Invalid Input");
//         return;
//     }
    
//     /* Initialization of values */
//     min_l = 0;
//     min_r = 1;
//     min_sum = arr[0] + arr[1];
    
//     for (l = 0; l < arr_size - 1; l++) {
//         for (r = l + 1; r < arr_size; r++) {
//             sum = arr[l] + arr[r];
//             if (Math.abs(min_sum) > Math.abs(sum)) {
//                 min_sum = sum;
//                 min_l = l;
//                 min_r = r;
//             }
//         }
//     }
    
//     console.log("The two elements whose sum is minimum are "
//     + arr[min_l] + " and " + arr[min_r] + " " + arr_size);
// }

// // Driver Code
// arr = new Array(1, 60, -10, 70, -80, 85);
// minAbsSumPair(arr, 6);

console.log(Math.abs(-5+ 3));