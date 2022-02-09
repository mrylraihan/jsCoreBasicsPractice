// First way
const word = 'word'
const rWord = (w) => {
    let arrW = w.split('').reverse().join('')
    console.log(arrW)
}

rWord(word)


// Second way 
function reverseString2(str) {
    let result = ''

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result
}

console.log(reverseString2('cat'))

// third way
const reverseWord3 = (w) => {
    w = Array.from(w)
    let rWord = ''
    for (let i = 0; 0 < w.length; i++) {
        rWord += w.pop()
    }
    return rWord
}

console.log(reverseWord3(word))




const array3 = [1,2,0,4,0,5,6]

const moveAllZeros = (arr)=>{
  const arrZero = arr.filter(ele=> ele === 0)  
  const arrNew = arr.filter(ele => ele !== 0)
  
  return [...arrNew, ...arrZero];
}

console.log(moveAllZeros(array3))
