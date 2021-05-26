let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

function set(){
    for(let i = 0; i<elements.length;i++){
        
        let cssValue = elements[i].value;

        let cssProperty = elements[i].getAttribute('id');

        console.log(cssProperty, cssValue);
        
        div.style[cssProperty] = cssValue;
    };
};

document.getElementById('set').addEventListener('click', set);


let elmt = document.getElementsByName('cssP');

let dv = document.getElementById('modi');

function st(){
    for(let i = 0;i < elmt.length; i++){
        let cssV = elmt[i].value;

        let cssP = elmt[i].getAttribute('id');

        console.log(cssV,cssP);

        dv.style[cssP] = cssV;
    };
};

document.getElementById('st').addEventListener('click', st);