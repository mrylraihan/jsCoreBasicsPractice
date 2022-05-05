// The magic happens here!
const screen  = document.getElementById('screen')
const pixel = document.querySelector('.pixel')
 

pixel.addEventListener('mouseenter', (e)=>{
    e.target.classList.add('colored-in')
})

for (let index = 0; index < 6423; index++) {
    // creating our div pixel
    const otherPixels = document.createElement('div')
    // adding the styles with the class name
    otherPixels.classList.add('pixel')
    // adding our javascript event to the element 
    otherPixels.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
    })
    // add it to the screen 
    screen.append(otherPixels)
    
}
// located the clear button
const clearBtn = document.getElementById('clear-screen-button')
// console.log(clearBtn);
clearBtn.addEventListener('click',()=>{
    const pixelList = document.querySelectorAll('.pixel')
    pixelList.forEach(element=>element.classList.remove('colored-in'))
} )