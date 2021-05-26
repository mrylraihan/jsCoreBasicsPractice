const btn = document.getElementById('button'); 
const userInput = 15;
let result;

result = userInput + 8;
result = userInput/2;
result -= 1;
result /=1;


const dosomething = ()=>alert('hey im doing something');

btn.addEventListener('click',dosomething);

// alert(result);
// alert(userInput);

// Create two variables: One that holds a fictional user input (a number of your choice) and one that holds no value initially (e.g. "result").
// Set the result variable to 18 plus the value stored in user input.
// Add three additional lines of code where you change the result variable again (by subtracting a value of your choice, multiplying it and dividing it).
// Think about the value stored in the user input variable you also created - did that value change?
// alert() the result and the user input variables (in two separate alert() calls).
//understanding this keyword 
// const user = {
//     firstName: 'Wallie',
//     lastName: 'Raihan',
//     pets:['cat', 'dog','bird'],
//     fullName : function(){
//         console.log(this);
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
//     listpets: function(){
//         this.pets.forEach(function(pet){
//             console.log(this.firstName+ " " +pet);
//         },this)
//     }
// }
// user.listpets();

// function User(name){
//     this.name = name;
//     console.log(this);
// }
// const newUser = new User('john');


// const members = {teamName: 'blue rockets',
// people:['max','wallie','manuel'],
// getTeamMembers(){
//     this.people.forEach(p=>{
//         console.log(p+'-'+ this.teamName);
//     });
// }
// };
// members.getTeamMembers();

// function moreMembers(members){
// for(member in members){
//     console.log(member + this.teamName);
// }
// }
// moreMembers();

// setters and getters in JS

const person= {
    firstName : 'Wallie',
    lastName : 'Raihan',
    age:'29',
    get fullName(){
        return `${person.firstName} ${person.lastName} ${person.age}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
        this.age = parts[2]
    }
};
person.fullName = 'john smith 50'
console.log(person);


// const student = {
//     set name(givenValue){
//         this.named = givenValue;
//     },
//     get name(){
//         return this.named;
//     }
// }


// student.name = 'ali'
// console.log(student.name);
const student ={

}
student.name = 'ali';
console.log(student);

let person1 = {
    name:'John',
    get greeting(){
        return 'Hi my name is '+this.name.toUpperCase() + ' !';
    },
    set addLastName(lastName){
        this.name = this.name + ' ' +lastName; 
    }
};

console.log(person1.name);
console.log(person1.greeting);
person1.addLastName = 'raihan';
console.log(person1.name);
console.log(person1.greeting);
