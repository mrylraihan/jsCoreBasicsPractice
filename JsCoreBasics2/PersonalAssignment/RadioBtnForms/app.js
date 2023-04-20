const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const checked = Array.from(form.elements).find(radio=>radio.checked)
    console.log(checked.value)
})