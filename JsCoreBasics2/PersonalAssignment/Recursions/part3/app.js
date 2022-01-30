// Recursion practice
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);  
    }
    console.log('Hooray');
}

countDown(3);
// 3
// 2
// 1
// Hooray


function countDownRecursive(n) {
    if(n<=0){
        console.log('Hooray');
        return 
    }
    console.log(n);
    return countDownRecursive(n - 1);
}

countDownRecursive(3)
// 3
// 2
// 1
// Hooray

//------------------------------------->

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

// Another example
function printChildrenRecursive(t) {
    if(t.children.children === 0){
        return
    }
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
}

const tree = {
    name:'John', 
    children: [{
        name:'Jim',
        children:[]
    },
    {
        name:'Zoe',
        children: [
            {name:'Kyle', children:[]},
            {name:'Sophia', children:[]}
        ]
    }
    ],
}

printChildrenRecursive(tree)




// // Array.reduce practice
// const array2 = [1,2,3,4,5]

// const sumReduce = array2.reduce((preV, curV)=> preV+=curV)
// console.log(sumReduce);


// 2* 2* 2

let result = 1
function powerOF(sum, num) {
    if(num===1) return sum 

    // result *= sum
    // console.log(result);
    // return powerOF(sum, num-1)
    // return sum * powerOF(sum, num-1)
    //or
    return num ===1 ? sum : sum * powerOF(sum, num-1)
}

console.log(powerOF(2,3));


/*
Write a function that given a string, counts total number of consonants in it.
A consonant is a English alphabet character that is not vowel (a, e, i, o and u).
Examples of constants are b, c, d, f, g, ..
input will never have spaces or non letter characters
Examples:
Input: 'hello'
Output: 3
Input: 'recursion'
Output: 5
Input: 'computerize'
Output: 6
*/

const countConsonants2 = (sentence) => {
    const newSentence = sentence.split('')
    let count = 0
    newSentence.forEach(ele => {
        if (ele !== 'a' && ele !== 'e' && ele !== 'i' && ele !== 'o' && ele !== 'u' && ele !== ' ') {
            count += 1
        }
    })
    return count
}

console.log(countConsonants2('Hello im Wallie'))
const countConsonants = (string, num = 0) => {
    //   if(string.length === 0)
    if (string === '') return num
    // base case
    //   if the string is empty -- base case achieved
    // action
    //   someway of knowing what vowels ['a', 'e', 'i', 'o', 'u']
    const vowelList = ['a', 'e', 'i', 'o', 'u']
    // if the character is not in the vowels array we know we want to increment the number
    if (!vowelList.includes(string[0])) num++
    string = string.slice(1)
    // recursive case
    // word
    return countConsonants(string, num)
}

console.log('it should be 3:', countConsonants('hello'))
console.log('it should be 5:', countConsonants('recursion'))
console.log('it should be 6:', countConsonants('computerize'))



/*
Write a function that given a string, counts total number of consonants in it.
A consonant is a English alphabet character that is not vowel (a, e, i, o and u).
Examples of constants are b, c, d, f, g, ..
input will never have spaces or non letter characters
Examples:
Input: 'hello'
Output: 3
Input: 'recursion'
Output: 5
Input: 'computerize'
Output: 6
*/

const countConsonants5 = (sentence) => {
    const newSentence = sentence.split('')
    let count = 0
    newSentence.forEach(ele => {
        if (ele !== 'a' && ele !== 'e' && ele !== 'i' && ele !== 'o' && ele !== 'u' && ele !== ' ') {
            count += 1
        }
    })
    return count
}

console.log(countConsonants5('Hello im Wallie'))
// const countConsonants = (string, num = 0) => {
//     //   if(string.length === 0)
//     if (string === '') return num
//     // base case
//     //   if the string is empty -- base case achieved
//     // action
//     //   someway of knowing what vowels ['a', 'e', 'i', 'o', 'u']
//     const vowelList = ['a', 'e', 'i', 'o', 'u']
//     // if the character is not in the vowels array we know we want to increment the number
//     if (!vowelList.includes(string[0])) num++
//     string = string.slice(1)
//     // recursive case
//     // word
//     return countConsonants(string, num)
// }

// console.log('it should be 3:', countConsonants('hello'))
// console.log('it should be 5:', countConsonants('recursion'))
// console.log('it should be 6:', countConsonants('computerize'))

let count = 0
const countConsonants3 = (word, num = 0) => {
    const vowelList = ['a', 'e', 'i', 'o', 'u']
    if (word.length - 1 < num) return count

    const char = word[num]
    if (!vowelList.includes(char)) {
        count += 1
        console.log(char)
    }
    return countConsonants3(word, num + 1)
}

console.log(countConsonants3('wallie'))

// let word = 'wallie'
// const newword = word.split('')
// console.log(newword)
// const char = newword.pop()
// console.log(newword)
// console.log(char)
// word = newword.join('')
// console.log(word)

// try to solve with spread operator
let counts = 0
const countConsonants4 = (w) => {
    const vowelList = ['a', 'e', 'i', 'o', 'u']
    if (!w) return counts
    const word = [...w]
    const char = word.pop()
    if (!vowelList.includes(char)) {
        counts += 1
    }
    const newWord = word.join('')
    return countConsonants4(newWord)
}

console.log(countConsonants4('wallie'))
// try to solve with spread operator