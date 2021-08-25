const h1 = document.getElementById('main-title');

const twoLi = document.getElementsByClassName('list-item');//returns an array
const listEle1 = twoLi[0];
listEle1.onclick = ()=>alert('it works! : byClassName')

//Syntax for querySelector and all 
//tagName = 'tag'
//classname = '.classname'
//id = '#id'

const thidLi = document.querySelectorAll('.list-item');//returns an array
thidLi[1].onclick = ()=>alert('it works! : querySelectorAll')


const firstLi = document.querySelector('li');
firstLi.onclick = ()=>alert('it works! : querySelector');


//query selector using a css selector
//querySelector('ul li:first-of-type') valid
//returns the first element in the ul
//querySelector('ul li:last-of-type') valid
//returns the last element in the ul

//finding the h1 through document body
const body = document.body;
const h1Ele = body.querySelector('h1');
h1Ele.addEventListener('click', ()=>alert('it works! : document body'))

const secondH2 = document.querySelector('div:last-of-type');
secondH2.onclick= ()=>alert('it works second divtag')
//or
// const div = document.querySelectorAll('div');
// const secondH2 = div[1]
// secondH2.onclick= ()=>alert('it works second divtag')

