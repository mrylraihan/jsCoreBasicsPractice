//constructors are functions that create objects
//it allows yoiuto create multiple instances of an object
//naming convention of constructors is a capital letter

function Apple(color, score){
  this.color = color;
  this.score = score;
  this.eat = function(){return 'eat the apple';};
  this.throw = function(){return 'throw the apple away';};
}

Apple.prototype = {
  eating : function(){return "eat the apple please";}, 
  throwing :function(){console.log("throwing apple pits");console.log(this);}
};

// to call  a constructor we have to use the new keyword

const apple1 = new Apple('red', 100);
const apple2 = new Apple('blue', 65)
console.log(apple1);



console.log(apple1.throw());
apple1.throwing();
apple1.eating();




function Person(name, age, country){
  this.name = name;
  this.age = age;
  this.country = country;
  this.sayName = function(){
    return `hey my name is ${this.name}`;
  };
  this.givingBio = function(){
    return this.sayName() + ` and im from ${this.country}`;
  };
} 


Person.prototype = {
  walking: function(){return 'walking';}, 
  working: function(){return 'working';}, 
  sleeping: function(){return 'sleeping zzzz';}
}

const person1 = new Person('wallie', 29, 'USA');
const person2 = new Person('heshow', 29, 'Yemen');

console.log(person1.sayName());
console.log(person2.sayName());

console.log(person2.sleeping());
console.log(person2.givingBio());

const p1Btn = document.getElementById('p1btn');

p1Btn.onclick = ()=>alert(person1.givingBio());

const p2Btn = document.getElementById('p2btn');

const personDoStuff = ()=>{
  const details = person2.givingBio();
  alert(details);
}
p2Btn.addEventListener('click',personDoStuff);
