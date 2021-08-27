
const h1 = document.querySelector('h1');
const sec = document.querySelector('section');
const btn = document.querySelector('button')
const btn1 = document.querySelectorAll('button')[1];
const btnitem = document.getElementById('btnitem')
const ul = document.querySelector('ul');
const liList = ul.querySelectorAll('li');
const div = document.querySelector('div');
let lastli;
console.log(btn);
console.log(btn1);

btn.addEventListener('click', ()=>{
  // if (sec.className === 'redz visible') {
  //   sec.className = 'redz invisible'
  // }else{
  //   sec.className = 'redz visible'
  // }

  // sec.classList.toggle('visible');
  sec.classList.toggle('invisible');
});

btn1.addEventListener('click', ()=>{
  // h1.classList.toggle('visible');
  h1.classList.toggle('invisible');
})
lastli = document.querySelector('li:last-of-type');
let liNum = liList.length
btnitem.addEventListener('click',()=>{
  
  // ul.innerHTML += `<li> item ${++liNum}`;
  //or
  ul.insertAdjacentHTML('beforeend',`<li> item ${++liNum}`);
  lastli = document.querySelector('li:last-of-type');
  lastli.onclick = ()=>{alert('last li!')}
  div.insertAdjacentHTML('beforeend', '<h2>hey</h2>');
})
lastli.onclick = ()=>{alert('last li!')}

