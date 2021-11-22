// using this fake api https://jsonplaceholder.typicode.com/
// using the xml http object 
const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

// this allows you to issue Http request in order to exchange data between 
// website and the server, this xhr object will allow you to send http request
const xhr = new XMLHttpRequest();

// now to we need to configure our request 
// open takes at least 2 params, 
// first param is the http request you want (HTTP Method)
// second param is the url we want to send the request to (URL Address)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';//configuring our response data to json so we dont have to convert it later 

// .onload is an event listener like onclick , we aren't using
//  addEventListener because just in case older browser dont use it 
// JSON.stringify() = helps you convert JsCode to json data
// JSON.parse() = helps convert json data to JsCode
xhr.onload = function(){
    // here we are extracting the response from the xhr object
    // const listOfPosts = JSON.parse(xhr.response) // this is our response data which is json data that we are converting to JsCode
    const listOfPosts = xhr.response; //or we dont need the JSON methods because we configured it on top 
    // now we need to convert the json data to js so we can use it 
    console.log(listOfPosts);

    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl)
    }
    
}

// this will send the request
xhr.send()
