// Constructor functions 

// in JS constructors build things 
// these are called constructor functions

// you need Function Apple(){return object}; is teh blue print of Apple
//instance of Apple(); is basically like a copy of the blue print
//Constructor functions use Capitals

function Apple( x,y,color,score){
    
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
};

var apple1 = new Apple(10,20,"red",75);

function Car(name, wheelSize, brand, color, price){
    this.name = name;
    this.wheelSize = wheelSize;
    this.brand = brand;
    this.color = color
    this.price = price;

}

var car1 = new Car("model 3", 27, "tesla", "grey", 38000);
var car2 = new Car("model Y", 32, "tesla", "black", 42000);
var car3 = new Car("model S", 32, "tesla", "grey", 80000);