const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')
// https://jsonplaceholder.typicode.com/
// https://www.youtube.com/watch?v=Vj7W8pI-L6w

function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest();
         xhr.open(method, url)
        
         xhr.responseType = 'json'
         xhr.onload = function () {
             if (xhr.status >= 200 && xhr.status < 300) {
                 resolve(xhr.response)
             }else{
                 //server side errors
                 reject(new Error('something went wrong!'))
             }

            // const listOfPosts = JSON.parse(xhr.response)

            // on load also need to handle non success status code errors
         };
        //  add error handling for if request was failed 
         xhr.onerror = function () {
            reject(new Error('Failed to send request'))
         }
         xhr.send(JSON.stringify(data));
    })
    return promise
}


function fetchPosts() {
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
    }).catch(error=>console.log(error.message))
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