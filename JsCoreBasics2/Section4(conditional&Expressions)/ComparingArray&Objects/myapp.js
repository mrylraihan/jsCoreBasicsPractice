const person1 = {name:'wallie'};
const person2 = {name:'wallie'};

person1 == person2; // false
person1 === person2; // false

person3 = person1;

person3 == person1;//true
person3 === person1;//true

const t = true;
const f = false;

const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];
array1 == array2// false
array1 === array2// false

array3 = array1;
array3 == array1//true
array3 === array1//true
console.log(array3 == array1);


/*Truthy and Falsy Values 
truthy and falsy values is when javascript tries to coerce 
the value to get a boolean value 
*/

let nameInPut = 0;// this is a string value not a boolean 

if (nameInPut) {// Now because nameInput is in a conditional js will
    //convert this string value to a truthy
    console.log('truthy');
}else{
    console.log('not truthy');
}

/*
because name input has a value it will return truthy 
but if it had an empty string or not been initialized yet meaning (let nameInPut;) 
or was 0 it would return falsy

numbers = 0 //falsy
numbers = anynumber but 0 //truthy

strings = 'anything'//truthy
strings = ''// falsy

objects & arrays even empty will always be truthy

null, undefined, and NaN is always falsy 
*/