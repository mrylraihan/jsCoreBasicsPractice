const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = {name:'Wallie'};
person = null;// the object{name:'Wallie'}
//is eligible for
function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click',printMessage);
}


addListenerBtn.addEventListener('click', addListener);


// function addListener() {
//   clickableBtn.addEventListener('click',function() {
//     const value = messageInput.value;
//     console.log(value || 'Clicked me!');
//   });
// }
