const h1Element = document.querySelectorAll('.h1');// returns an array with all elements with the class h1
const h2Element = document.querySelector('#h2');//returns the element with the id h2
const pElement = document.querySelector('main p');
const pElementNotMain = document.querySelector('p');
for (let ele in h1Element) {// iterates through the array and adds the onclick functionalty
    h1Element[ele].onclick = ()=> alert('querySelector works on a class');
}

h2Element.addEventListener('click', ()=>alert('im a h2'))// uses the eventlistener to add a cb function 

pElement.addEventListener('click', ()=>console.log('your hovering over the p-tag'));

pElementNotMain.onclick = ()=>{alert('p not in main')}