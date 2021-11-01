// Promises 
// Promises are for handling async operations 
// promises are objects that represent an operation that has not be executed yet 
// first the old style approach 
// call back functional style


const logIn = (email, password) => new Promise((resolve, reject)=>{
    setTimeout(() => {
     if(email && password){
         resolve({
             id: Date.now(),
             name: 'wallie',
             email: 'wallie@gmail.com'
         })
     }else{
         reject('Email and Password are required!')
     }
 }, 1000);
})


const loadUserProfile = (user) => new Promise((resolve, reject)=>{
    setTimeout(() => {
            if (user) {
                resolve({
                    profileId: 'some id',
                    img: 'http://image...',
                })
            } else {
                reject('User is Required')
            }
    }, 1000)
})



const loadProfilePosts = (profile)=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (profile) {
            resolve([
                {
                    id:1,
                    title:'My Post'
                }, {
                    id:2,
                    title:'My Awesome Post'
                }
            ])
        }else{
            reject('Profile is required')
        }
    }, 1000)
})

logIn('mr.wallie@gmail.com', 'simple123')
.then(user =>loadUserProfile(user))
.then(profile=>loadProfilePosts(profile))
.then(posts=>console.log(posts))
.catch(err=>console.log(err))
