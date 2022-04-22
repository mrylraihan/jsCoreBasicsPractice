const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

const url = ''
const editId = 1
const deletedId = 3


const fetchAll = ()=>{
    const res = fetch(url)
    console.log(res)
    res.then(res=>res.json())
        .then(result=>{
            console.log(result);
        }).catch(err=>console.log(err))
}

function createPerson(){
    const data = { name : 'Heshow' };

    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    }).then(res=>res.json())
    .then(data=>console.log("Success: ", data))
    .catch(error=>console.log("Error: ", error))
}

function editPerson(){
    const data = { name: 'Wayel' };

   return fetch(url + editId, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
        .then(data => console.log("Success: ", data))
        .catch(error => console.log("Error: ", error))
}
function deletePerson(){

    return  fetch(url + deletedId, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
        .then(data => console.log("Success: ", data))
        .catch(error => console.log("Error: ", error))
}
