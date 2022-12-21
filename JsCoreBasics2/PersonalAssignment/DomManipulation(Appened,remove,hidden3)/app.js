const hideBtn = document.getElementById('toggleHide')

const ul = document.getElementById('liList')

const mapData = (data)=>{
   return data.map(ele=>{
    const li = document.createElement('li')
    li.innerText = ele.title
    return li
    })
}

const showOrHideData = (data)=>{
    ul.toggleAttribute('hidden')
    ul.innerHTML = ''
    ul.append(...data)
    let btnText = ul.hasAttribute('hidden') ? 'hide data' : 'show data'
    hideBtn.innerText = btnText
}

const getData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(result => mapData(result))
    .then(mappedResult=>showOrHideData(mappedResult))
    .catch(console.error)
}
console.log(ul)
hideBtn.addEventListener('click', getData)