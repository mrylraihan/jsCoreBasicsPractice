/*
what is bind?
    1.Bind an object to a funciton 
    2.Reference is using 'this

*/

let c1 = {
  x: 5,
  y: 10,
};

let c2 = {
  x: 7,
  y: 14,
};

function printCoordinates() {
  console.log(this.x + " " + this.y);
}

let c1_func = printCoordinates.bind(c1);

let c2_func = printCoordinates.bind(c2);

c1_func();
//5 10 is logged
c2_func();
//7 14 is logged

///Another example

const person1 = {
  name: "Wallie",
  lName: "Raihan",
  occupation: "developer",
  country: "yemen",
};

function printDeets() {
  console.log(
    `Hey im ${this.name} ${this.lName}, and im a ${this.occupation}, im also from ${this.country}`
  );
}

const person1Deets = printDeets.bind(person1);

person1Deets();
//hey im Wallie Raihan, and im a developer, im also from yemen



///Another example

function sayHI(a){
    console.log(a);
}

const hi = sayHI.bind(this, "hey im using bind");

hi();