const section = document.getElementById('section')
const allsections = document.querySelectorAll('section')
const section2 = allsections[1];
const div = document.querySelector('div')

const sayhi = ()=>console.log('say Hi');

section.addEventListener('click', sayhi)
console.log(section);
// section is being captured and the click event is being bubbled around all the elements from the root , meaning all elements in side are getting the click event 

//lets try it again 
section2.addEventListener('click', ()=>console.log('section 2 say Hi'))
console.log(section2);

div.addEventListener('click', ()=> console.log('div say hi'))
console.log(div);


// what bubbling and capturing does is check for the event and runs all of them , 
//bubble and capturing is the order in which they run, bubbling from inside out 
//and capturing from outside in


const divB = document.getElementById('div')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

// divB.addEventListener('click', ()=>console.log('div bubble'))
divB.addEventListener('click', ()=>console.log('div bubble'), true)// this means in should be apart of the capturing phase so 
// it will log first the div event then the btn event
btn1.addEventListener('click', ()=>console.log('btn1 bubble'))
btn2.addEventListener('click', ()=>console.log('btn2 bubble'))
btn3.addEventListener('click', ()=>console.log('btn3 bubble'))

// all of these button will run there event then there parents 
//so we get logged btn# bubble and div bubble