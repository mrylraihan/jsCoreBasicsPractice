const btn = document.querySelector('button')
const div = document.querySelector('div')

const addImages=()=>{
    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random()*3)
        createMultipleElements(num)
    }
}

const createMultipleElements=(n)=>{
    const img = document.createElement('img')
    img.src = `./images/images${n}.png`
    img.style.height = '400'
    img.style.width = '400'
    div.append(img)
}

btn.addEventListener('click', addImages)