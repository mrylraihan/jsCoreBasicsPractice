//Bind is basically when you connect an object to a function and you reference that object 
//when the method is called 
// The bind() method creates a new function that, when called, has its this keyword set to the
//provided value, with a given sequence of arguments preceding any provided when the new
//function is called.

//example

const person1 = {
    name:'Mike', 
    age:'34', 
    job:'mechanic'
}

const person2 = {
	name: 'Jenna',
	age: '41',
	job: 'Doctor',
}



function tellMeAboutYourSelf(a, b) {
    console.log(`hey im ${this.name} im also known as ${a} and im a ${this.job} and im ${this.age} years old , i love too ${b}`);
}
                                    //object , first Param/Default, second Param 
const mike = tellMeAboutYourSelf.bind(person1, 'Norman', 'cook', );
mike();//hey im Mike im also known as Norman and im a mechanic and im 34 years old , i love too cook

const jenna = tellMeAboutYourSelf.bind(person2, 'Jenny', 'Ride my bike');
jenna();//hey im Jenna im also known as Jenny and im a Doctor and im 41 years old , i love too Ride my bike



//----------------------------------------------->

const myButton = {
    content :'OK', 
    click(){
        console.log(this.content + ' clicked');
    }
};

myButton.click();//OK clicked