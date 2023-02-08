const btn = document.querySelector('button')
const div = document.querySelector('div')

div.addEventListener('click', ()=>{
    console.log('touch the div')
})
btn.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('clicking the button')
})