const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

console.log("second");

let result = 0
for (let i = 0; i < 1000000000; i++) {
  result+=i;
}

console.log(result);