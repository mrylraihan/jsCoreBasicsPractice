/*
This is Encapsulation (grouping data together)
objects can only contains Nouns, Abjectives, verbs
these are called properties
functions in a object are called methods
*/

const cat = {
  name: "Meow", //nouns
  fur: "orange", //
  weight: "2 pounds", //nouns
  eating: function () {
    return "eating cat food";
  },
  sounds: function () {
    return "purring";
  }
};

console.log(cat);

const people = {
  fName: "Wallie",
  lName: "Raihan",
  pet: cat, // object people containing another object cat
};

console.log(people);
console.log(cat.eating());

const car1 = {
  color: "red",
  speed: 165,
  maker: "Honda",
  drive: function () {
    return "driving car";
  },
  stop: function () {
    return "stopping car";
  },
};

console.log(car1.drive());

const Iphone = {
  model: "Iphone 12 pro",
  color: "Graphite",
  size: "regular",
  battery: 2700,
  faceTime: function () {
    return "Facetime call";
  },
  phoneCall: function () {
    return "making call";
  },
  textMessage: function () {
    return "sending Text";
  },
};

console.log(Iphone.model);
console.log(Iphone.textMessage());

// an object containing an array
const car = {
  maker: "Bmw",
  color: "red",
  speed: 122,
  accessories: ["mattepaint finish", "floor mats", "angle lights"],
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    pistons: [{ maker: "BMW" }, { maker: "BMW2" }],
  },
  drive: function () {
    return "drive";
  },
};
console.log(car["maker"]); //this will point to BMW,
// by using the square brakets your saying to point to whats in the ''
//so it looks for the maker key
console.log(car["drive"]()); //this is how you point to a function and run it
console.log(car["accessories"][0]); //this is how you point to an array and a specific index
console.log(car["engine"]["pistons"][1]["maker"]); //this is how you follow the chain to maker of pistons

const person1 = { name: "wallie" };

// you access your object and create members with these two ways
person1["age"] = 30;
//or
person1.lastName = "Raihan";

person1.sayHi = function(){
    return 'hi im '+ this.name;//this point the name to the objects name property
}

/*now our person1 object is
  person1 = {
    name: "wallie",
    age: 30,
    lastName: "Raihan",
    sayHi:function(){return 'hi im '+ this.name;}
};
  you have to make sure when your creating a proptery like this
   you must assign it or it wont be created, we can do the same thing with creating functions
  */

console.log(person1.sayHi());
  var arrayMix = [
    "String",
    100,
    ["embed", 200],
    { car: "ford" },
    function () {
      return "driving";
    },
  ];

  arrayMix[2][0]; //will point to embed in the embeded array



const stuff = 'stuff'
const table = 'table'
// how to add properties to an empty object using array(square bracket) notation
let obj = {}//empty object
//the value of stuff will be our key and the value of table will be our value 
//creating our key value pair
obj[stuff] = table
console.log(obj);//{stuff: 'table'}