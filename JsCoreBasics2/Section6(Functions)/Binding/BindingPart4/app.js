//the difference between call() aplly() and bind()
//without strict mode 'this' will default to the global window object
//'use strict mode'

let bob = function(num, str){
  console.log('bob', num, str, this);
  return true;
}

let bill = {
  name:'Bill Murray', 
  movie: 'Lost in Space', 
  myMethod:function(fn){
    fn();
  }
}

//bob(1, 'hello');

// bill.myMethod(bob);

//Call()
bob.call(bill, 2, 'good bye im call')
//i think the first perameter is which object you want to refer too then 
//the peramters you want to pass in 
//bob 2 good bye {name: "Bill Murray", movie: "Lost in Space", myMethod: ƒ}

//Apply()
bob.apply(bill, [3, 'hi im apply']);
//the first parameters points to the object
//apply works the same way as call but after the first parameter it takes an array 
//as parameters
//bob 3 hi {name: "Bill Murray", movie: "Lost in Space", myMethod: ƒ}

//Bind()
const bobAgain = bob.bind(bill, 4, 'hello im bind');

bobAgain();


//<............................................>
//another way 

let bob2 = function(num, str){
  console.log('function bob2', num, str + this.name);
  return true;
}

let chris = {
  name:'Chris Tucker', 
  movie: 'Ruch Hour', 
  myMethod:function(fn){
    //fn();
    //argument[0] is bob2 
    let n = arguments[1];//4
    let s = arguments[2];//'ciao
    fn.apply(chris, [n, s])
    // fn.call(chris, n, s)
  }
}

chris.myMethod(bob2, 4, 'ciao ')

const chrisTalking = bob2.bind(chris, 4, 'hey agian im bind with ');

chrisTalking();

const billTalking = bob2.bind(bill, 4, 'hey agian im bind with ')

billTalking();

//<............................................>
//More Bind 

function test1(a){
  console.log(a);
}

const conductTest1 = test1.bind(this, 'im test1');

conductTest1();

//<............................................>
//More Bind with objects



const person1 = {
  name: 'wallie',
  sayName: function() {
    return this.name;
  }
};

const sayPersonsName = person1.sayName;
console.log(sayPersonsName()); // The function gets invoked at the global scope
// expected output: undefined

const boundName = sayPersonsName.bind(person1);
console.log(boundName());
// expected output: wallie


const person2 = {
  name:'Wayel',
  sayingName:function(){
    return this.name;
  }
};

const sayingPersonName2 = person2.sayingName;

console.log(sayingPersonName2());

const boundName2 = sayingPersonName2.bind(person2);

console.log(boundName2());