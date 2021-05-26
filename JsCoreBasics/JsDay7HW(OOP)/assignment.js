class Person{
#age;
#fName;
#lName;
    get age(){
    
 return this.#age + ' years old';
}
set age(age){
return this.#age = age;
}

get fName(){
    return 'Sir '+this.#fName;
}
set fName(value){
    this.#fName = value;
    return this.#fName 

}

get lName(){
return 'Mr. ' + this.#lName; 
}
//you dont need teh setters if you not trying to change the way you want to set it in the variable 

    constructor(firstName,lastName,age,job){
        this.#fName = firstName;
        this.#lName = lastName;
        this.#age = age;
        this.job = job;
    }
    fullName(){
        return this.fName+" "+this.lName;
    }
}

const person1 = new Person('wallie','raihan',29,'software developer')

person1.age = 32;
console.log(person1.age);
person1.fName = 'Wayel';
console.log(person1.fName);
console.log(person1.lName);