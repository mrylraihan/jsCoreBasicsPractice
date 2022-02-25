const walliesHeading = document.getElementById('myHeading');
// 
console.log(walliesHeading)

// appends element before or after specified dom element
// const newH1 = document.createElement('h1')
// newH1.innerText = 'the second heading', 
// walliesHeading.before(newH1)
// const newH1 = document.createElement('h1')
// newH1.innerText = 'the second heading', 
// walliesHeading.after(newH1)

// lets run getElementById on a element 
const ul = document.getElementById('ul')
console.log(ul);
// found the first ul with that id, then we got back the whole ul with the children ele in it
// then ran a querySelector to find the first li 
const firstLi = ul.querySelector('li')
console.log(firstLi);
// and it worked 

// const wallieHeadingQS = document.querySelector('#myHeading') 
// console.log(wallieHeadingQS);


const l1 = document.querySelector('.list-item')
console.log(l1);

const listOfLi = document.querySelectorAll('li')
console.log(listOfLi);

const thirdCode = listOfLi[3].querySelector('code')
console.log(thirdCode);
console.log(listOfLi);
const classNameLive = document.getElementsByClassName('list-item')
console.log(classNameLive);
const newLi = document.createElement('li')
newLi.innerText = 'newLi'
newLi.className = 'list-item'
ul.append(newLi)
console.log(classNameLive);
