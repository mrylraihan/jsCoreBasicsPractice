console.log(callable(function(){return 'memory hoisting'}));// this function is written at the bottom 
//functions get hoisted up in memory but variables only the memory pointer
//callable Object is an object that is envokable 
//example
function names(){
  var fullname = "Wallie Raihan";
  function concat(name){
    return 'MR.' + name;
  };
  return concat(fullname);
};

// you can print out the callable object or you can envoke it 
//print by just calling the method name and this will print the whole object 
// or envoke it and print the object
//console.log(name);
console.log(names());

function nameConcat(fullname){
  return fullname.fName +' '+ fullname.lName;
};

const fName = nameConcat({fName: 'wayel', lName: 'raihan'})
console.log(fName);
// because we are invoking our peramter in our function
//it will envoke an function we pass through 
function callable(fullname){
  return fullname();// this will envoke the function passed in 
}
const callconst = callable(function(){ return 'embed';});
console.log(callconst);//logs embed
//another way to do this is is to envoke the callconst() in the log if we didnt return
//a envoked parameter