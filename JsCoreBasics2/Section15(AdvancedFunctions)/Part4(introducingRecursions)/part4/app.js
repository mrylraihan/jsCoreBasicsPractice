// Regular way with iteration 
function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--){
        total += i      
    }
    console.log(total);
    return total
}

sumRange(5);//15

// function sumRangRec(n) {
//     let total = 0
//     total = total + n;
//     if(n === 0){
//         console.log(total);
//         return total
//     }
//     console.log(n);
//     sumRangRec(n - 1)
// }

// sumRangRec(5)//


function sumRangRecursive(n, total = 0) {
    if(n <= 0){
        console.log(total);
        return total
    }
    return sumRangRecursive(n-1 , total + n)
}

sumRangRecursive(5, 0)

// a different way to return the sum in to the next recursive method 

function sunRangRecursive2(n) {
    if(n === 1){
        return 1
    }
    return n += sunRangRecursive2(n-1)
}


console.log(sunRangRecursive2(4))
