const userInput = document.getElementById('input-stuff');
const addBtn = document.getElementById('btn-add');
const userInput2 = document.getElementById('input-stuff2');
const addBtn2 = document.getElementById('btn-add2');   
const userInput3 = document.getElementById('input-stuff3');
const addBtn3 = document.getElementById('btn-add3');   

const alerting = ()=>alert('Hey ' + userInput.value);
addBtn.addEventListener('click', alerting);

  


const alerting2 = ()=> {
    alert(userInput2.value);
    const str1 = userInput2.value
console.log(str1);
}
addBtn2.addEventListener('click', alerting2);


//trying to figure out how to save input into a variable
let str3;
function savedName(){
    str3= userInput3.value;
    console.log(str3);
   return str3
}

const savedInput = savedName();

const alerting3 = ()=>alert(savedName);
addBtn3.addEventListener('click', alerting3);