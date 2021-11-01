const button = document.querySelector('button');
const output = document.querySelector('p');

const greet = ()=>{
  console.log('Hello!');
}

const showAlert= ()=>{
  console.log('Danger');
}

console.log('hey 1');

setTimeout(showAlert, 6000);

button.addEventListener('click', ()=>console.log('i was clicked'))

greet();