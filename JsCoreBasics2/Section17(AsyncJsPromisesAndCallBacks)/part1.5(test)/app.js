const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

console.log("before timer");

setTimeout(()=>{
  console.log('in set time out');
},0)


console.log('after set time out');


let result = 0
for (let i = 0; i < 1000000000; i++) {
	result += i
}

console.log(result)
