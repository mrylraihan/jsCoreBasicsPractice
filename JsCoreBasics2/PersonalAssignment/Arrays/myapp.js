let array1 = [1, 2, 3, 4, 5];

array1.forEach((element) => {
  console.log(element);
});

for (let elemt in array1) {
  console.log(array1[elemt]);
}

let shoppingList = ["Apples", "oranges", "milk"];

// an object containing an array
var car = {
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

// an array containing objects and functions
const person1 = { name: "wallie" };
const person2 = { name: "heshow" };
const person3 = { name: "garrette" };
function personSays() {
  return "hi";
}
var personArray = [person1, person2, person3, personSays()];

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

// you access your object and create members with these two ways
person1["age"] = 30;
//or
person1.lastName = "Raihan";
/*now our person1 object is
  person1 = {name: "wallie", lastName: "Raihan", age: 30}
  */

//Modifying Arrays

var anotherArray = ["hi", 2, true, person2];

anotherArray[0]; // will give me 'hi'

console.log(anotherArray[0]);

anotherArray[0] = "bye";

console.log(anotherArray[0]); //now returns bye

anotherArray[0] += " and hi"; // concat your string in index 0

console.log(anotherArray[0]); //returns bye and hi

//using bracket syntax
anotherArray[10] = 1010;
console.log(anotherArray); // ["bye and hi", 2, true, {…}, empty × 6, 1010]
// empty x 6 is saying there is 6 empty indexs

var anotherArray1 = [1, 2, 3, 4, 5];
//.shift()
console.log(anotherArray1.shift()); //removes the first index and returns it
//so 1 is logged
console.log(anotherArray1); //[2, 3, 4, 5]
//.pop()
console.log(anotherArray1.pop()); //remove the last index of the array and return it
//so 5 is logged
console.log(anotherArray1); //[2, 3, 4]
//.unshift()
console.log(anotherArray1.unshift('string', 1, person3));//this adds to the beginning
//of the array and returns the length so 5 is returned
console.log(anotherArray1);//["string", 1, person3 { name: "garrette" }, 2, 3, 4]
//.push()
console.log(anotherArray1.push(100));//this will add to the end of the array.
//what is now logged is the length again 7

console.log(anotherArray1);//["string", 1, person3 { name: "garrette" }, 2, 3, 4, 100]

//.splice() allows you to delete multiple and from a specific index
//.splice(index starting, how many to delete)
console.log(anotherArray1.splice(6));//this first permater tells us what index
// do you want to delete from, it then deletes everything starting from that index

console.log(anotherArray1);//["string", 1, person3 { name: "garrette" }, 2, 3, 4]

console.log(anotherArray1.splice(1,2));//tells us which index to start from and , 
//the second peramter tells us how many elements to remove

console.log(anotherArray1)// ["string", 2, 3, 4]

//.splice()to add mulitple 
//.splice(index starting, how many to delete, what you want to add)
console.log(anotherArray1.splice(1, 0, 1));//returns an empty array[]

console.log(anotherArray1);//["string",1, 2, 3, 4]

console.log(anotherArray1.splice(1, 1, 1))//returns an array of what we deleted [1]

const storedDeleted = anotherArray1.splice(1, 1, 1);

console.log(storedDeleted);//[1]



//how to make your parameter take in array that has any amount of numbers
function addMore(...nums){
  for(n in nums){
console.log(nums[n]);
  }
}

addMore(1,2,3,4,5);


let wallie = ['w', 'a', 'l', 'y'];
let w = wallie.splice(0,1,'m');
console.log(wallie);
console.log(w);