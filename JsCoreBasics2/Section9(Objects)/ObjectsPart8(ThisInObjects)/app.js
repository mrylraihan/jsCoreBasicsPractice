//this usually points to the object or thing that called it 
//this refers to different things, depending on where it is used, and how its called

//Generally this refers to the thing or object which called the function with this

// 1) this in Global Context and in a Function (i.e. outside of any function)
function something() {
    console.log(this);
 }
 
console.log(this); // logs global object (window in browser)

something();//logs the global object

//2) this in an Arrow-Function - Called in the global context
const somethingArrow = ()=>{
    console.log(this);
}
somethingArrow();//logs the global object

// 3) this in a Method (non-Arrow) - Called on an object
const person ={
    name:'Wallie', 
    sayName:function () {
        console.log(this.name);
    }
}
person.sayName();//wallie point to the object

//4) this in a Method (Arrow Function) - Called on an object

const person1 = {
    name:'larry' ,
    greet:()=>{
        console.log(this.name);
    }
}

person1.greet();//logs nothing (window object)


// this can refer to unexpected things if you call it on some other object, e.g.:

const person3 = { 
    name: 'Max',
    greet() {
        console.log(this.name);
    }
};
person3.greet();//Max 

const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
anotherPerson.sayHi = person3.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
 
anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it
// If in doubt, a console.log(this); can always help you find out what this is referring to at the moment!



function Horse(name) {
    this.name = name;
    this.sayHello = ()=>{
        console.log(this.name);
    }
}
const myHorse = new Horse('Beet');
myHorse.sayHello()