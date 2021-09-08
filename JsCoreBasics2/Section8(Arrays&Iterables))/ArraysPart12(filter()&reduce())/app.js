//Filter
//Filter allows you to filter through an array 

const numList = [1,2,3,4,5,6,7,8,9];

// const filteredArray = numList.filter((num, indx, ary) => {
// 	return num > 6
// })
//or
const filteredArray = numList.filter(num=>num > 6);

console.log(filteredArray);



//Reduce
//array.reduce(previousValue, currentValue, currentIndex, originalArray)
//previousValue is where do you want the value to start as, its also the second parameter you add in the function after the arrow function
//example
//array.reduce((preV,curValue,curIndex,originalA)=>{
//return preV +curValue;
//},preV) 

//curValue is the first element in the array
//curIndex is the curent index of the element
//and Original Array is teh original array calling the method
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// numberList.forEach(n=>sum+=n);// adds the sum of the array

// console.log(sum);//45

//or 
const sum = numberList.reduce((preV,curV,curI,originalArray)=>{
return preV + curV;
}, 0)// this second parameter is the initial value we want to start with
//meaning sum will have the initial value of 0

console.log(sum);


//or if you not using the last 2 parameters you can omit them 
const sum2  = numberList.reduce((prV,curV)=>{
    return prV+curV;
},0);

console.log(sum2);