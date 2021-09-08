// Chaining Methods in JavaScript
// With all these useful array methods you learned about, it's
//important to understand how you can combine them. Let's take map()
//and reduce() as an example:

const originalArray = [{price:10.99}, {price:12.57}, {price:8.99}];
// const transformedArray = originalArray.map(obj=>obj.price);
// console.log(transformedArray);//(3) [10.99, 12.57, 8.99]
// const sum = transformedArray.reduce((sumV,curVal)=>sumV+curVal,0)
// console.log(sum);//32.550000000000004

//or

const sum = originalArray.reduce((sumVal, curVal)=>sumVal+curVal.price, 0);
console.log(sum);//32.550000000000004


//But let's say you have a more complex extraction logic and hence want to split this into
//multiple method calls. Or you have a re-usable map function which you want to be able to
//use in different places of your app. Then you can still write the initial example in a more
//concise way if you leverage method chaining:

const originalArray2 = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum2 = originalArray2.map(obj => obj.price)
    .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
console.log(sum2);//46.97
//We call .reduce() directly on the result of map() (which produces an array, that's why this
//is possible). Hence we can avoid storing the mapped array in a separate constant or
//variable that we might not need in any other place.

//more practice


const nameList = [
	{ letter: 'w' },
	{ letter: 'a' },
	{ letter: 'y' },
	{ letter: 'e' },
	{ letter: 'l' },
]

const nameSum = nameList.map(lt => lt.letter).reduce((sumW,curVal)=>sumW + curVal, '');
console.log(nameSum);//wayel

const simpleName = ['w','a','y','e','l'];
const nameSum2 = simpleName.reduce((sumW,cVal)=>sumW+cVal,'');
console.log(nameSum2);