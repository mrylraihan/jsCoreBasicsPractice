const userInput = document.getElementById('inp');
const headr = document.getElementById('header');
const btn = document.getElementById('btn');


function changeColor(){
    let inputColor = userInput.value;
    switch(inputColor.toLowerCase()){
        case 'red':
            headr.style.color = 'red';
            break;
        case 'blue':
            headr.style.color = 'blue';
            break;
        case 'green':
            headr.style.color = 'green';
            break;
        case 'yellow':
            headr.style.color = 'yellow';
            break;
        default:
            headr.style.color = 'brown';
            break;
    }

}

btn.addEventListener('click', changeColor)