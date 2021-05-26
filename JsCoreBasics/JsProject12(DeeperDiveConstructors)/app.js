// creating a class and constructor function
// class AgedPerson{
   
//     printAge(){
//         console.log(this.age + " " + this.name);
//     }

// }
class Person{
    name = 'Wallie';

    constructor(){
        // super();
        this.age = 30;
    }

    greet = ()=>{
        console.log(`Hey my name is ${this.name} and im ${this.age} years old`);
    }
    // greet = function (){
    //     console.log(`Hey my name is ${this.name} and im ${this.age} years old`);
    // } if we use this method with out the arrow fucntion when we call this on the button 
    // we will have to use bind because this method will think the button is calling it not out p object

}
const course = {
    title: 'JavaScript - the complete guide',
    rating:5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course,{
    printRating:function(){
        console.log(`this is the rating ${this.rating}`);
    }
});

course.printRating();
// const p = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click',p.greet);
//button.addEventListener('click',p.greet.bind(p));
//we would use this if we didnt use the arrow function on our method in our class
 
// function Person(){
//     this.name = 'Wayel';
//     this.age = 29;
// }
// Person.prototype.greet = function (){
//         console.log(`Hey my name is ${this.name} and im ${this.age} years old`);
// }
 
// Person.prototype = {
//     printAge(){
//         console.log('my age is '+ this.age);
//     }
// };

// const p = new Person();
// p.greet();
// Person.describe = function(){
//     console.log('Creating persons...')
// }

// Person.prototype.printAge = function(){
//     console.log(this.age);
// }

// console.dir(Person);

// const p = new Person();
// console.log(p.__proto__);
// console.log(p.length);
// console.log(p.toString());
// console.log(p.__proto__ == Person.prototype);
// p.printAge();
// console.dir(Object.prototype);

const num = 100;

for(let i =0; i<=100; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('FizzBuzz');
    }else if (i%3===0){
        console.log('Fizz');
    }else if (i%5===0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
};
