const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btnList = document.querySelectorAll('button');
const div = document.querySelector('div');
// btn1.addEventListener('click',()=>console.log('btn1 false'))
// btn2.addEventListener('click',()=>console.log('btn2 true'))

// btn1.onclick = ()=> console.log('btn1 false');
// btn2.onclick = ()=> console.log('btn2 true');



const newP = document.createElement('ul');
div.appendChild(newP)

btnList.forEach(ele=>ele.addEventListener('click', ()=>{
    if (ele.dataset.show === "true") {
        console.log(ele);//you can sub for this is it wasnt an arrow function
        const newLi = document.createElement('li');
        newLi.innerHTML = `<p>${ele.dataset.show}</p>`
        newP.append(newLi)
    }
}
));



// this works
// const p = document.createElement('p')
// const tex = document.createTextNode(`${ele.dataset.show}`)
// p.appendChild(tex)
// div.appendChild(p)