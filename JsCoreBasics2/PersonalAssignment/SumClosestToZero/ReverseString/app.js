const arr = [1, 2, 3, 4, 5]
const reverseArrayInPlace = function (array) {
    let arrLength = array.length;
    for (i = 0; i < arrLength; i++) {
        array.splice(i, 0, array.pop());
    }
    return array
}

console.log(reverseArrayInPlace(arr))

// 

// only reverse to the middle 
const reverseArrayInPlace2 = function (array) {
   for(i = 0; i < Math.abs(array.length/2) ; i ++){
     let temp = array[i]
     array[i] = array[array.length -i - 1]
     array[array.length - i - 1] = temp
   }
      return array
}

console.log(reverseArrayInPlace2(arr))

