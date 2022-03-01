let arr2 = [2,4,6,8,10]

function arrSum(arr){
    if(arr.length ==1){
        console.log(arr);
        return arr[0]
    }
    else{
        console.log(arr);
        return arr.pop() + arrSum(arr)
    }
}

const num = arrSum(arr2)

console.log(num);

let name = 'mike'
let age = 2
const person = {
    name: 'wallie',
    age:21,
    sayName: function(){
        console.log(name, age);
    }
}

for (const key in person) {
//    console.log(person.key);undefined
//    console.log(key ,':'+ person[key]);
}

// object.entries()
// object.keys()
// Object.values()

// console.log(Object.entries(person));
// // [['name', 'wallie'], ['age', 21]]
// console.log(Object.keys(person));
// // ['name', 'age']
// console.log(Object.values(person));
// ['wallie', 21]

person.sayName()