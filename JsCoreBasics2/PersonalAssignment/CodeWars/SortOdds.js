// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
    let oddsArray = []
    array.forEach((ele, idx) => {
        if (ele % 2 !== 0) {
            oddsArray.push(ele)
            array[idx] = ''
        }
    });
    oddsArray.sort()
    array.forEach((ele, idx) => {
        if (ele == '') {
            let oddValue = oddsArray.shift()
            array[idx] = oddValue
        }

    })
    return array
}

// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]

console.log(sortArray([5, 8, 6, 3, 4]))


function sortArray2(array) {
    let oddsArray = array.filter((ele, idx) => {
        if (ele % 2 !== 0) {
            array[idx] = ''
            return ele
        }
    })
    oddsArray.sort()
    array.forEach((ele, idx) => {
        if (ele == '') {
            let oddValue = oddsArray.shift()
            array[idx] = oddValue
        }
    })


    return array
}

console.log(sortArray2([5, 8, 6, 3, 4]))

function sortArray3(array){
    const oddNums = array.filter(num => num % 2 !== 0).sort((a, b) => a - b)
    const sort = array.map(num => num % 2 !== 0 ? oddNums.shift() : num)
    return sort
}


let test1 = [1,2,3,4]
let mapTest = test1.map(ele=>ele%2==0 ? ele:false)
console.log(mapTest)

