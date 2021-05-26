// const numbers= [1,2,3,4,5];
// console.log(numbers);

// const moreNumbers = new Array('hi', 'welcome', 4,6);
// console.log(moreNumbers);

// const strangeArray = Array(5);
// //when you just add a sinlge number its telling js that you want to create a fixed array with the length of the array 

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const personalData = [30, 'Wallie', {weight:165, height:5.9, more:[]}];


// const threeDArray = [[1,2,[2.5,2.6]], [3,4], [5,6]];

// for(const data of threeDArray){
//     for(const dataPoints of data){
//         console.log(dataPoints);
//     }
// }

// console.log(personalData[2]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('coding');
// hobbies.push('eating');
// hobbies.unshift('coding');
// // const poppedValue = hobbies.pop();
// // hobbies.shift();
// console.log(hobbies);
// // console.log(poppedValue);
// console.log(hobbies.length);

// hobbies.splice(0,0,'cats');
// console.log(hobbies);
//  const removedElements = hobbies.splice(3);
// console.log(hobbies);
// console.log(removedElements);


const testResult = [1,2,3,2,4,5];
const storedResult = testResult.concat(8,9);

testResult.push(5.91);
console.log(storedResult, testResult);

 
 console.log(testResult.lastIndexOf(2))
 
 const personData = [{name:'max'}, {name:'mike'}];
 console.log(personData.indexOf({name:'max'}))

 const mike = personData.find((person,inx,persons)=>{
     return person.name ==='mike';
 })
 console.log(mike);

 const max = personData.findIndex((person,inx,persons)=>{
    return person.name ==='max';
})
console.log(max);


const catList = [{kitty:'black Cat'}, {kitty:'Orange Cat'}];

console.log(catList.indexOf({kitty:'black Cat'}));

const blackCat = catList.findIndex((cat,indx,cats)=>{
    return cat.kitty ==='Orange Cat';
})
console.log(blackCat);


const catList2 = [black = {kitty:'black Cat'}, orange = {kitty:'Orange Cat'}];

console.log(catList2.includes(black));

const numberList = [1,2,3,4,5,6,7];

console.log(numberList.includes(9));

const btn = document.getElementById('btn');

const alerting = ()=>{
    alert('hey dude!');
}

btn.addEventListener('click',alerting)


function sum(...b){
    let sum = 0;
    for(let nums of b){
        sum += nums;
    }
    return sum;
}

console.log("sum", sum(2,3,4,5));

