// Events and "This"
//this wont work when we are using arrow functions 
// arrows will always point to the window 
// unless we use bind and pass it in as teh second param but thats cheating
//so we will change the arrow functions to regular function delegations 
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


// button.addEventListener('click', event => {
//     event.stopPropagation()
// 		console.log('CLICKED BUTTON')
// 		console.log(event)
// 		console.log(this)this will always point to the window
// })

button.addEventListener('click', function(event){
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');


// listItems.forEach(listItem=>{
//   listItem.addEventListener('click', event=>{
//     event.target.classList.toggle('highlight')
//   })
// })


// list.addEventListener('click', event=>{
//   event.target.closest('li').classList.toggle('highlight')
//   console.log(this);// this wont point to the list but to the window
// })



// this is how trigger DOM elements Programmatically
list.addEventListener('click',function(event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();// here we are making the form submit
  button.click()//forcing the button event 
  console.log(this);
});