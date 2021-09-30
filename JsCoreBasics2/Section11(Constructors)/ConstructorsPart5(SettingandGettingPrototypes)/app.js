//Setting and Getting in Prototypes

function Person() {
	this.name = 'Wallie';
	this.sayName = function () {
		console.log(`hey im ${this.name}`);
	}
}

const person1 = new Person();
person1.sayName();


const course = {
	title : 'new Course',
	rating : 5 
}

console.log(course.title);
//get prototypes of 
console.log(Object.getPrototypeOf(course));

//set prototype

Object.setPrototypeOf(course,{
	printRating: function () {
		console.log(`${this.rating}/5`);
	}});

	course.printRating();



	//Another way to create an object literal, with creating prototype functions
	//this creates the objects and automatically assigns the functions to your prototype

	const student = Object.create({
		printProgress: function () {
			console.log(this.progress);
		}
	})

	student.progress = 'a lot of progress this month';
	//when the object is logged the method isnt shown because it was assigned to it prototype
	console.log(student);//{progress: 'a lot of progress this month'}
	student.printProgress();//a lot of progress this month

	//now to create a object literal with props and an assigned prototype for its methods
	//proper syntax is 
	// const teach = Object.create({methods for prototype},{props})
	const teacher = Object.create({
		teachClass: function () {
		console.log(` i teach ${this.subject} course at the ${this.title} `);
	}},{subject:{value: 'Math'} , title: {value: 'Williamsburg Charter HighSchool'}})

	console.log(teacher);//{subject: 'Math', title: 'Williamsburg Charter HighSchool'}
	teacher.teachClass();// i teach Math course at the Williamsburg Charter HighSchool 

	for (let key in teacher) {
		console.log(key ,teacher[key]);
	}

	const object = { a: 1, b: 2, c: 3 }

	for (const property in object) {
		console.log(`${property}: ${object[property]}`)
	}
	//a:1
	//b:2
	//c:3