const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')
// https://jsonplaceholder.typicode.com/
// https://www.youtube.com/watch?v=Vj7W8pI-L6w

function sendHttpRequest(method, url, data) {
     return fetch(url, {
         method: method, 
         body: JSON.stringify(data),
         headers :{
            //  where you would add them
            'Content-Type':'application/json' 
            // Authorization: `Bearer ${TOKEN}`
         }
     })
    .then(response=>{
        if (response.status >= 200 && response.status < 300) {
            return response.json()
        }else{
           return response.json().then(data=>{
                console.log(data);
                throw new Error('something went wrong server-side')
            })
        }
    })
    // network connectivity issues would lead us to this catch block
    .catch(error=>{
        console.log(error);
        throw new Error('Something went wrong with your request!')
    })
   
}


function fetchPosts() {
    // broke this on purpose to trigger the error handling 
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then(responseData=>{
         const listOfPosts = responseData
            console.log(listOfPosts);
            for (const post of listOfPosts) {
                const postEl = document.importNode(postTemplate.content, true)
                postEl.querySelector('h2').textContent = post.title.toUpperCase()
                postEl.querySelector('p').textContent = post.body
                postEl.querySelector('li').id = post.id
                listElement.append(postEl)
            }
    })
    .catch(error=>console.log(error.message))
}
async function createPost(title, content){
   try {
       const userId = Math.random();
       const post = {
           title: title, 
           body: content, 
           userId : userId
       };
       return sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)
   } catch (error) {
    console.log(error.message);   
   }

}




fetchButton.addEventListener('click', fetchPosts)


form.addEventListener('submit', (event) => {
	event.preventDefault()
	const enteredTitle = event.currentTarget.querySelector('#title').value
	const enteredContent = event.currentTarget.querySelector('#content').value
	createPost(enteredTitle, enteredContent)
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
    event = form.reset()

})

// createPost('Dummy', 'a Dummy post')
console.log('hey');


postList.addEventListener('click', event=>{
    if(event.target.tagName === "BUTTON"){
        const postLi = event.target.closest('li')
        const postId = postLi.id
        console.log(postId);
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`)
        postLi.remove()
        
    }
})