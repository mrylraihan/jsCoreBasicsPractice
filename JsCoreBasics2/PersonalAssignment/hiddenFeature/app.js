const h1 = document.querySelector('h1')
const btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    h1.toggleAttribute('hidden')
})