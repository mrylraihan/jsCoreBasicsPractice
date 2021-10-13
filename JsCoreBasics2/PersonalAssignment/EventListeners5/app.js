const boxlist = document.querySelectorAll('.box')

// function printInnerText(){
//     console.log(this.innerText);
// }
// boxlist.forEach(box=>box.addEventListener('click', printInnerText))
//or
// boxlist.forEach(box=>box.addEventListener('click', ()=> console.log(box.innerText)))
// or

const printInnerText = ()=>{
    console.log(this.innerText);
}

boxlist.forEach(box=>box.addEventListener('click', printInnerText.bind(this)))