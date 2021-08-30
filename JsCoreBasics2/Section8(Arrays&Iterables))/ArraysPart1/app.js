/*
there are many different ways to create an array 
const arr = [1]    const arr = Array(1)    const arr = new Array(1)
const arr = ['HI]   const arr = Array('Hi')     const arr = new Array('Hi')
const arr = Array.of(1)     const arr = Array.of('HI')     const arr = Array.from('Hi')
const arr = Array.from(1) 
*/

 const numbers = [1,2,3]// most common way of creating an array
 console.log(numbers);//(3) [1, 2, 3]

 const moreNumbers = new Array(4,5,6)// this based of the constructor function, 
 //if no parameters where passed the array would be empty 
 console.log(moreNumbers);//(3) [4, 5, 6]

 const anotherList = new Array(3);//when you only pass one parameter it 
 //creates an empty array with a fixed length but this wont error 
 //if you push more then the fixed amount 
 // the single number would be interbrited as the length the array should be
console.log(anotherList);//(3) [empty × 3]

anotherList.push(1,2,3,4,5);
console.log(anotherList);

const moreNumbers2 = Array(2,3);// you dont need the new key word and call it as a 
//function, this will also create an array an, if you only pass in one parameter this 
//will also result in just creating an empty array with the length being the paramter
console.log(moreNumbers2);//(2) [2, 3]

const yetAnotherArray = Array.of(4)// this is another example
console.log(yetAnotherArray);[4]

const str = 'hello';
const letters = Array.from(str);//this cant take multiple paramters, or numbers
//Array.from allows you to pass in a iterable or an array like object 
//and converts its to a new array 
console.log(letters);(5) ["h", "e", "l", "l", "o"]

const lis = document.querySelectorAll('li');
const itemList = Array.from(lis);
console.log(itemList);//(3) [li, li, li]

let userInput = itemList[2].querySelector('input');

itemList[1].addEventListener('click', ()=>{console.log(userInput.value)})
