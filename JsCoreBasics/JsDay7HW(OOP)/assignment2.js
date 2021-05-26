class Course {
#price;
get price(){
  return '$' + this.#price;
}
set price(value){
  if(value <0){
    throw 'Invalid value';
  }
  this.#price = value;
}


  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.length = courseLength;
    this.#price = coursePrice;
  }
  methodOne() {
    return `how much length do you get for the amount paid is \$${
      this.length / this.#price
    } each minute`;
  }
  methodTwo() {
    return `Title: ${this.title},Length: ${this.length}, Price: ${this.price}`;
  }
}

const Course1 = new Course("JavaScipt", 120, 96);
const Course2 = new Course("Python", 109, 66);

console.log(Course1, Course2);

console.log(Course1.methodOne());
console.log(Course2.methodTwo());

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}
const Course3 = new PracticalCourse("Html & Css", 230,59.99,25);
console.log(Course3);
Course3.methodTwo();
class TheoreticalCourse extends Course {
  publish() {
    console.log("Hi Console");
  }
}
const Course4 = new TheoreticalCourse("Java Course", 240, 23.5);

Course4.publish();

console.log(Course4.methodTwo());
console.log(Course4.methodOne());
Course4.price= 500;
console.log(Course4.price);