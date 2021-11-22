// using this fake api https://jsonplaceholder.typicode.com/
// using the xml http object
// Using Fetch Api , fetch()
const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')

function sendHttpRequest(method, url, data) {
	
	return fetch(url, {
		method: method,
		body : JSON.stringify(data),
		headers:{
			'Content-Type': 'application/json'
		}
	}).then(response=>{
		if (response.status >= 200 && response.status < 300) {
			return response.json();
		}else{
		return response.json().then(errData=>{
				console.log(errData);
				throw new Error('something went wrong! -- serverSide')
			});
		}
	}).catch(error=>{
		console.log(error);
		throw new Error('something went wrong')
	});//if you just pass a url it will just send a get request
	
}

function fetchPosts() {
	sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
		(responseData) => {
			const listOfPosts = responseData
			console.log(listOfPosts)
			for (const post of listOfPosts) {
				const postEl = document.importNode(postTemplate.content, true)
				postEl.querySelector('h2').textContent = post.title.toUpperCase()
				postEl.querySelector('p').textContent = post.body
				postEl.querySelector('li').id = post.id
				listElement.append(postEl)
			}
		}
	).catch(error=>alert(error.message)); 
}

async function createPost(title, content) {
	const userId = Math.random()
	const post = {
		title: title,
		body: content,
		userId: userId,
	}
	sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)
}

fetchButton.addEventListener('click', fetchPosts)

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const enteredTitle = event.currentTarget.querySelector('#title').value
	const enteredContent = event.currentTarget.querySelector('#content').value
	createPost(enteredTitle, enteredContent)
	event = form.reset()
})

postList.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		console.log('button was clicked')
		const postLi = event.target.closest('li')
		const postId = postLi.id
		sendHttpRequest(
			'DELETE',
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		)
		postLi.remove()
	}
})
