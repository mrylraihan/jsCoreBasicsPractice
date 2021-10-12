const section = document.getElementById('section')

const sayhi = ()=>console.log('say Hi');

section.addEventListener('click', sayhi)

// section is being captured and the click event is being bubbled around all teh elements from the root , meaning all elements in side are getting the click event 