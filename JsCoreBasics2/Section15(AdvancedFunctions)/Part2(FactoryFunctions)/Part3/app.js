// Factory functions 
//the idea behind factory functions are that they are 
//functions that produce another function , or objects

function createElement(type,text,color) {
    const el = document.createElement(type);
    el.innerText = text;
    el.style.color = color;
    document.body.append(el);
    return {
        el,
        setText(text){
            el.innerText = text;
        },
        setColor(color){
            el.style.color = color;
        }
    }
}

const h1 = createElement('h1', 'Hey guys', 'red')
h1.setText('Ima a h1')
const h2 = createElement('h2', 'Hey guys', 'green')
