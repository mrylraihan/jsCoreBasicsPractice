const form = document.getElementById('taskForm')
const form2 = document.getElementById('form2')
console.log(form)

fetch('http://localhost:4000/note/')
.then(res=>res.json())
.then(console.log)
.catch(console.error)

let url = 'http://localhost:4000/note/'
const getData = e => {
    e.preventDefault()
    const formDataObj = new FormData(form)
    const keyValues = Object.fromEntries(formDataObj.entries())
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(keyValues)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
          console.log(error)
        });
    form.reset()
}


const testApiPost = e =>{
    e.preventDefault()
    const formDataObj = new FormData(form2)
    formDataObj.append('id', 1)
    formDataObj.append('userId', 1)
    const keyValues = Object.fromEntries(formDataObj.entries())
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(keyValues),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(console.error)

}



form2.addEventListener('submit', testApiPost)
form.addEventListener('submit', getData)