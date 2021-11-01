// Promises 
// Promises are for handling async operations 
// promises are objects that represent an operation that has not be executed yet 
// first the old style approach 
// call back functional style
// this is callback hell


const logIn = (email, password, successCB, failureCB) => {
 setTimeout(() => {
     if(email && password){
         successCB({
             id: Date.now(),
             name: 'wallie',
             email: 'wallie@gmail.com'
         })
     }else{
         failureCB("Email and Password are required!")
     }
 }, 1000);
}

const loadUserProfile = (user, successCB, failureCB) => {
    setTimeout(()=>{
        if (user) {
            successCB({
                profileId: 'some id',
                img: 'http://image...'
            })
        }else{
            failureCB('User is Required')
        }
    }, 1000)
}

const loadProfilePosts = (profile, successCB, failureCB)=>{
    setTimeout(()=>{
        if (profile) {
            successCB([
                {
                    id:1,
                    title:'My Post'
                }, {
                    id:2,
                    title:'My Awesome Post'
                }
            ])
        }else{
            failureCB('Profile is required')
        }
    }, 1000)
}

logIn('mr.wallie@gmail.com', 'simple123',user=>{
    loadUserProfile(user, profile=>{
        loadProfilePosts(profile, posts=>{
            console.log(posts);
        }, err=>{
            console.log(err);})
    }, err=>{
        console.log(err);})
} ,error=>{
    console.log(error);
} )