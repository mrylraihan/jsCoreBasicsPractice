class Course {
    #price;
get price(){
    return '$' + this.#price;
}
set price(value){
    if(value<0){
        throw 'Invalid Value!';
    }
    this.#price = value;
}


  constructor(courseTitle, coursePrice, courseLength) {
    this.title = courseTitle;
    this.price = coursePrice;
    this.length = courseLength;
  }

  calculateValue() {
    return this.length / this.#price;
  }
  printSummery() {
    console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
  }
}

const jsCourse = new Course("Cooking Course", 44, 50);
const reactCourse = new Course("React Course", 100, 34);

console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calculateValue());
console.log(reactCourse.calculateValue());

jsCourse.printSummery();
reactCourse.printSummery();

class PracticalCourse extends Course{
    constructor(title,length,price,excercisesCount){
        super(title,price,length);
        this.numOfExercise = excercisesCount;
    }
}
const angularCourse = new PracticalCourse('Angular the complete guide', 100,250,45);

console.log(angularCourse);
angularCourse.printSummery();

class TheoreticalCourse extends Course{
    publish = ()=> console.log('Publish....');;
    
}

const flutterCourse = new TheoreticalCourse("Flutter Couse", 325,35);

console.log(flutterCourse.price);
flutterCourse.printSummery();
console.log(flutterCourse.calculateValue());
flutterCourse.publish();
