function Computer(brand, screenSize, name, color, price){
    this.brand = brand;
    this.screenSize = screenSize;
    this.name = name;
    this.color = color;
    this.price = price;
    
}
Computer.prototype ={
    what: function (){return this;},// this point to the object that is envoking the what method
    typeOnKeys: function (){console.log("Typing on keys"); return this;},
    turnOn: function (){console.log("Computer on"); return this;},
    powerDown: function (){return "Computer shutting down";}
};
var computer1 = new Computer("apple", 13.3,"MacBook pro", "space grey", 13000);
var computer2 = new Computer("apple", 15.3,"MacBook 15", "space grey", 13000);
var computer3 = new Computer("apple", 11.3,"MacBook Air", "space grey", 13000);


// ================================================================================>>>>

var carsLeft = 0;
var carsRight = 0;
var greenMan = "yes";

if (greenMan === "no"){
    console.log("cross the road ");
}
else if (greenMan === "no" && carsLeft === 1 || carsRight === 0 ){//this evaluates to true
// else if (greenMan === "no" && (carsLeft === 1 || carsRight === 0)){//this evaluates to flase because teh order of operations
    console.log('All clear ! Cross the road brooklyn style!');
}
else{
    console.log('dont cross, stay where you are!');
}


// ================================================================================>>>>

var classRegister = ["Moe", "Ahmed", "Bilall"];

console.log( classRegister[0]);
console.log( classRegister[1]);
console.log( classRegister[2]);

for(var i = 0; i < classRegister.length ; i++){
    console.log( classRegister[i]);
};

var carList = ["model 3", "model y", "model S", "model x"];

console.log( carList[0]);
console.log( carList[1]);
console.log( carList[2]);

for(var i = 0; i < carList.length ; i++){
    console.log( carList[i]);
}

// reverese for loop
console.log("reveresed forloops");
for(var i = classRegister.length - 1; i>=0 ; i--){
    console.log(classRegister[i]);
}

// for in loop
console.log("for in loop");
for(var i in classRegister){
    console.log(classRegister [i]);
}