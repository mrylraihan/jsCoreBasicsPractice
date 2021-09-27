//task 1
class Course {
    //task 4
    #price
	constructor(t, l, p) {
		this.title = t
		this.length = l
		this.price = p
	}
    //task 3
    set price(val){
        if (val<0) {
            throw 'Invalid value!';
        }
        this.#price = val
    }
    get price(){
        return  `$${this.#price}`
    }
	//task 2
	calLenPrice() {
		const priceOverlen = this.#price / this.length
		return `you pay $${priceOverlen.toFixed(2)} per hour of the course`
	}
	courseSummary() {
		return `this course title is ${this.title} and its length is ${this.length} and for only ${this.price}`
	}
}

const javaCourse = new Course('Java the complete guide', 54, 20.0)
const jsCourse = new Course('Js better then java', 60, 20.0)
console.log(javaCourse.calLenPrice())//you pay $0.37 per hour of the course
console.log(javaCourse.courseSummary())//this course title is Java the complete guide and its length is 54 and for only 20

//task3

class PracticalCourse extends Course {
	constructor(t, l, p, numOfCurs) {
		super(t, l, p)
		this.numberOfCourses = numOfCurs
	}
}
class TheoreticalCourse extends Course {
	publish() {
		console.log('something')
	}
}

const pCourse = new PracticalCourse('HTML Course', 20, 15.99, 20);
console.log(pCourse.numberOfCourses);//20
console.log(pCourse.courseSummary());//assignment.js:39 this course title is HTML Course and its length is 20 and for only 15.99

const thCourse = new TheoreticalCourse('Data structures', 30,35.99);
console.log(thCourse.calLenPrice());//you pay $1.20 per hour of the course
thCourse.publish();//something

console.log(thCourse.price)//$35.99

// thCourse.price = -15//assignment.js:13 Uncaught Invalid value!