//constructors are functions that create objects
//it allows yoiuto create multiple instances of an object
//naming convention of constructors is a capital letter

function Apple(name, size) {
  this.name = name;
  this.size = size;
  this.eat = function () {
    return "eat the apple";
  };
  this.throw = function () {
    return "throw the apple away";
  };
}

Apple.prototype = {
  eatting: function () {
    return "eat the apple please";
  },
  throwing: function () {
    console.log("throwing apple pits");
    console.log(this);
  },
  whosApple:function(){
    return this;
  }
};

// to call  a constructor we have to use the new keyword

const apple1 = new Apple("red", 100);
const apple2 = new Apple("blue", 65);
console.log(apple1);

console.log(apple1.throw());
apple1.throwing();
 
  function applegenerator() {
    const applenumber = Math.floor(Math.random() * 15) + 1;
    const applename = `apple${applenumber}`;
    let applesize = Math.floor(Math.random() * 6) + 1;
    console.log(new Apple(applename, applesize));
    return new Apple(applename, applesize);
  }
 
const appleBtn = document.getElementById('aplbtn');
appleBtn.addEventListener('click',applegenerator )

const apple3 = applegenerator();
console.log(apple3);