const keys = ['first', 'second']

const values = [1,2]

const obj = {}
console.log(obj)
obj[keys[0]] = values[0]
obj[keys[1]] = values[1]

console.log(obj)


const entries = [
    ['foo', 'bar'],
    ['baz', 42]
];

const obj1 = Object.fromEntries(entries);

console.log(obj1);


const word = 'something?monkey=butt&butt=monkey'

const makeObject = (a)=>{
    const newString = a.trim().split('?')[1].split('&')
    console.log(newString)
    let newArr = []
    newString.forEach(ele=>{
         newArr.push(ele.split('='))
    })
    let newObj = Object.fromEntries(newArr)
    console.log(newObj)
}
makeObject(word)