const array = [1,2,3,4,5,6]

const reverseArray = (arr)=>{
    const revArr = arr.reverse()
    console.log(revArr);
}

reverseArray(array)

const word = 'word'

const reverseWord = (w)=>{
    const revWord = w.split('').reverse().join('')
    console.log(revWord);
}

reverseWord(word)


// reversing a different way 
const testWord = 'test'
const revWord = (word)=>{
    let w = word.split('')
    for (let i = 0; i < w.length / 2; i++) {
        let temp = w[i]
        w[i] = w[w.length -i - 1]
        w[w.length - i - 1] = temp
        
    }
    return w.join('')
}

const test = revWord(testWord)
console.log(test, 'in test');
