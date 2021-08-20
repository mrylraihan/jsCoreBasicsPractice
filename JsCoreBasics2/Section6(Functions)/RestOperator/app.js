//Rest Operator
//the rest operator need to be the last parameter
// you can only have one rest peramter
const sumUp = (...numbers)=>{//this is the rest parameter
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

console.log(sumUp(1,2,3,4,5));

//another way to use something similar to the rest parameter is the 
//arguments variable 
const subtractUp = function(){
    let sum = 0;
    for (const num of arguments) {
        sum -= num;
    }
}


//spread operator
let person = {age:30};

let yetAnotherPerson = {...person}; 


//function inside a function

const addingMore = (...numb)=>{
    let sum = 0;
//another function
    let addingOne = (a)=>{
        return a + 1;
    };

    for (let num of numb) {
      
        num = addingOne(num);
        sum+=num;
    } 
    return sum;
};

console.log(addingMore(1,2,3,4,5));