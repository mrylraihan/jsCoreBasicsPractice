//Trigger DOM Elements Programmatically 
//you can do this by using the .click(), etc... on the element if there 
//is an event on it already 
//so you can call it in another method  
const button = document.querySelector('button');


const buttonClickHandler = event => {
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};



const boundFn = buttonClickHandler.bind(this);



const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', event => {
  console.log('CLICKED DIV');
  console.log(event);
});

button.addEventListener('click', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');


// this is how trigger DOM elements Programmatically
list.addEventListener('click', event => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  button.click()//forcing the button event 
  // form.click();
  form.submit();// here we are making the form submit
  // any DOM element,
  //a lot of the events you can listen to can also be 
  //triggered programmatically,
  //this inst the same as when a user clicks on it, when you 
  //invoke them programmatically it will bypass certain things 
  //for example the prevent default on the form is getting 
  //ignored
});