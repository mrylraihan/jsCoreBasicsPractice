const h1 = document.querySelectorAll('h1')
const btn = document.querySelectorAll('button')

btn[0].addEventListener('click', ()=>{
    h1[0].toggleAttribute('hidden')
})
btn[1].addEventListener('click', ()=>{
    if(!h1[1].hasAttribute('hidden')){
        h1[1].setAttribute('hidden', '')
    }else{
        h1[1].removeAttribute('hidden')
    }
})
btn[2].addEventListener('click', ()=>{
   h1[2].classList.toggle('hide')
})