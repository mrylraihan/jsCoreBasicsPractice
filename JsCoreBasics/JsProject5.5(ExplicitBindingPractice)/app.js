const sayName = function(lang1,lang2,lang3){
    console.log(`My name is ${this.name} and i know ${lang1}, ${lang2}, and 
    alittle bit of ${lang3}`);
};

const stacey = {
    name: "Stacey",
    age: 34
};

const languages = ['javascript', 'html', 'css'];

//if we want to call the function in the 
//context of stacey to have this. keyword to reference stacey
//we use .call every function can use this method.
//the first perameter in the .call() is the object your referencing/ context you want to reference
//every parameter after teh first one is just going to passed in as an argument to your function
sayName.call(stacey, languages[0],languages[1], languages[2]);

// the .apply() does the same thing as the first argument passed is 
//what we want to the context of, but the second argument is the an array we want to 
//parse through
//we will get the same result as the .call method but instead of passing the arguments
//one by one we can pass an array.
sayName.apply(stacey,languages);

//the .bind is almost the same thing as .call but 
// .bind returns a brand new function instead of invoking the original function
//that we can invoke later
const newFn = sayName.bind(stacey,languages[0],languages[1],languages[2]);
newFn();




