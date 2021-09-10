const array1 = [1,2,3,4,5,5,6]
const setArray = new Set(array1);
console.log(setArray);//Set(6) {1, 2, 3, 4, 5,6}
//convert to an array 
const revertedArray = [...setArray];
//or we can do Array.from(setArray)
console.log(revertedArray);//(6)[(1, 2, 3, 4, 5, 6)]

for (const ele of setArray) {
    console.log(ele);// this will log each element 
}


const mappedArray = new Map();
mappedArray.set('Zebra', 5);
mappedArray.set('Lion', 12);
mappedArray.set('Monkeys', 24);
console.log(mappedArray);

for (const key of mappedArray) {
    console.log(key);// this will log each entry ['Zebra'=>5]and so on
}

for (const [key, value] of mappedArray) {
    console.log(key +":"+ value);//will log Zebra:5
}