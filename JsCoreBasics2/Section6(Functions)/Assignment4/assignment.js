//Task 1 
// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// const sayHello = (name)=>{
//   console.log(`Hi ${name}`);
// }

// sayHello('Wallie');

//Task2

const sayHello= (a,b)=> console.log(`${a} ${b}`);

sayHello('hi', 'Wallie');


const sayHello1 = ()=>{
  return "hi Wallie";
}

console.log(sayHello1());

const sayHello2= (a,b)=>{return `${a} ${b}`}

console.log(sayHello2('hi', 'Wallie'));

//Task3


function printHI(a){
  console.log(a);
}

function sayHello3(pH,a = 'hi',b = 'wallie'){
  const talk = `${a} ${b}`;
  pH(talk);
}

sayHello3(printHI, "hi", "Wallie");
sayHello3(printHI)


//Task4

//myOld code


function checkInput(cb,...strings){
  let hasEmptyText = false;
  for(const text of strings){
    if(!text){
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText){
    cb();
  }
}
function checking(){
  console.log('all not empty');
}
checkInput(checking,'hello', 'why','does','this','work');


