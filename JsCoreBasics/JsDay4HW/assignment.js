
// const hello = 'hi';
// const name1 = 'wallie';
// const defaultName = 'mike';
// const sayHello = (name = defaultName)=> {
//   console.log('Hi ' + name);
// }

// sayHello('wayel');

// const sayHello1 = (greeting, name)=>{
//   return(greeting +' '+name);
// }

// console.log(sayHello1('hi', 'wayel'));

// const sayHello2 = ()=> console.log(`${hello} ${name1}`);

// sayHello2(hello, name1);

// const sayHello3 = (...name)=>{
//   return ('hi' + name); 
// };
// console.log(sayHello3(' wallie', ' mike', 'ryan'));




// answers 
//task 1
const sayHello = name => console.log('hi '+ name);

sayHello('Max');
// task 2

const sayHello2 = (name, phrase) => console.log(phrase +' '+ name);
const sayHello3 = () => console.log('hi world');
const sayHello4 = name => 'hi '+ name;

sayHello2('Wayel', 'hi');
sayHello3();
console.log(sayHello4('wallie'));

// task 3
const sayHello5 = (name, phrase = 'hello') => console.log(phrase +' '+ name);
sayHello5('Wallie');

//task 4

// function checkInput(cb, ...strings){
//   let hasEmptyText =false;
//   for(const text of strings){
//     if(!text){
//       hasEmptyText = true;
//       break;
//     }
//   }
//   if(!hasEmptyText){
//     cb();
//   }
// }
// checkInput(()=>{
//   console.log('All not empty!');
// },
// 'hello',
// '212', 
// 'adsfa',
// 'Not empty'
// );


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

checkInput(()=>{
  console.log('all not empty');
},'hello', 'why','does','this','work');