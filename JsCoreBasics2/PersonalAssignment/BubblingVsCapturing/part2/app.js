const child = document.getElementById('child')
const parent = document.getElementById('parent')

parent.addEventListener('click', () => alert('im parent'))
child.addEventListener('click', ()=>alert('im child'))