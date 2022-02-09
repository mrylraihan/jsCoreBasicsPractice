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
