const myForm = document.getElementById('myForm')

const getFormData=(e)=> {
    e.preventDefault()
    console.log(myForm);

    let jsonObject = {};
    let formData = new FormData(myForm);
    console.log(formData, 'without stringify');
    // field[0] is the actual input name (key)
    // field[1] is the actual input field (value)
    for (let field of formData) {
        console.log(field[0], field[1]);
        jsonObject[field[0]] = field[1];
    }
    
    console.log(JSON.stringify(formData));
    console.log(JSON.stringify(jsonObject));
}
myForm.addEventListener('submit',getFormData )
