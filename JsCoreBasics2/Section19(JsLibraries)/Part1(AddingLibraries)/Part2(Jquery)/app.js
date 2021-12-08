$('h1').hover(()=>console.log('in'), ()=>console.log('out'))

// selector is the first $() so in this case all buttons will get this click event
$('#jquery').on('click', () => console.log('clicked! using jquery'))

// without jquery 

const btn = document.getElementById('not')
btn.addEventListener('click', ()=>console.log('clicked! just JS'))
