//My solution
// const firstLi = document.getElementById('task-1');

// firstLi.style.color = 'white';
// firstLi.style.backgroundColor = 'black';


// const h1 = document.querySelector('h1');

// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';
// h1.innerText='Assignment Solved!';

// const title = document.querySelector('title');

// title.innerText = "Assignment - Solved!"

/// his solution
//task 1
const task1El1 = document.getElementById('task-1');
const task1El2 = document.querySelector('li');//get the first li

task1El1.style.color = 'white';
task1El2.style.backgroundColor = 'black';

//task 2
// one way to access the title
// const docTitle = document.querySelector('title');
// docTitle.textContent = 'Assignment - Solved !';
// Another way to access the title
const docHead = document.head;
const docTitle2 = document.head.querySelector('title');

docTitle2.textContent = 'Assignment - Solved!';
//we could also use this 

// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';