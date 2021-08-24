//Call

function product(name, price){
    this.name = name;
    this.price = price;
    this.whatAMI = function(){
        return this.name +" "+this.price+' '+this.category;
    }
}

function food(name, price){
    product.apply(this, [name, price]);
    this.category = 'food';
}

function toy(name, price){
    product.call(this, name, price);
    this.category = 'toy';
}

const cheese = new food('feta', 4);
const fun = new toy('robot', 40);

console.log(cheese.whatAMI());
console.log(fun.whatAMI());


//Bind practice
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
//   hey im Wallie Raihan, and im a developer, im also from yemen
  
  ///Another example
  
function sayHI(a){
    console.log(a);
}

const sayHiWithBind = sayHI.bind(this,'hey from sayHi with bind!');

sayHiWithBind();


const cat1 = {
    color:'red', 
    catType: 'persian' 
}

const cat2 = {
    color:'green', 
    catType:'main coon'
}


function catDetails(a, b){
    console.log(`hey ima a cat and im color ${a} 
    and ima ${b} cat`);
}

const catDeets = catDetails.bind(cat1, cat1.color, cat1.catType);

catDeets()

const catDeets2 = catDetails.bind(this, cat1.color, cat2.catType)

catDeets2();


//arrow functions


const sayFullName = () =>console.log('Wayel Raihan');


// sayFullName('Wayel Raihan');

function useOtherFunction(fn){
    fn();
};

useOtherFunction(sayFullName);