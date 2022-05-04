let misc = [3, "true", { a: 1, b: 2 }, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]


// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here


// const noStrings = misc.filter(element=> typeof element !== 'string')

// console.log(noStrings);


const nameList = ['wallie', 'heg', 'hisham', 'will', 'maria']

const list = nameList.filter(name=>name[0] !== 'w')
console.log(list);


const person ={name:'heg', dosomething:function(){
    console.log('do something!');
}}

console.log(person.name);
person.dosomething()