console.log('hello im working!');
// // find the first h1 as many different ways possible

// // finding the first h1 with getElementById()
// const firstH1withID = document.getElementById('h1')
// console.log(firstH1withID.innerText);
// // finding the first h1 with querySelector('h1') 
// const firstH1withQS = document.querySelector('h1')
// console.log(firstH1withQS.innerText);
// // finding the first h1 with querySelector('.class')
// const firstH1withQSC = document.querySelector('.h1')
// console.log(firstH1withQSC.innerText);
// // finding the first h1 with querySelector('#id')
// const firstH1withQSID = document.querySelector('#h1')
// console.log(firstH1withQSID.innerText);

// // finding the first h1 with getElementsByClassName('h1') returns an array
// const firstH1withCN = document.getElementsByClassName('h1')[0]
// console.log(firstH1withCN.innerText,' found the first one');
// // finding the first h1 with querySelectorAll('by the tag name')
// const firstH1withQSA = document.querySelectorAll('h1')[0]
// console.log(firstH1withQSA.innerText);
// // finding the first h1 with querySelectorAll('by id')
// const firstH1withQSAID = document.querySelectorAll('#h1')[0]
// console.log(firstH1withQSAID.innerText);


// located the ul and the li's in it
// located the first ul by its id
const firstUl = document.getElementById('ul')
console.log(firstUl);
// console.log(firstUl.innerHTML);

const listofLi = firstUl.querySelectorAll('li')
console.log(listofLi);
// got all the children of the ul meaning including the h3
const ulsH1 = firstUl.querySelector('h3')
console.log(ulsH1.innerText);


const childEle = firstUl.children;
console.log(childEle);
console.log(childEle[1].innerText);
console.log(childEle[5].innerText);

const newli = document.createElement('li')
newli.innerText = 'hey im a li that was appended'
firstUl.append(newli)

console.log(childEle[6].innerText);


const newli2 = document.createElement('li')
newli2.innerText = 'hey im the second li that was appendchild'
firstUl.appendChild(newli2)

console.log(childEle[7].innerText);