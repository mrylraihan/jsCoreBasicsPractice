//try = lets you test a block of code for errors
//catch = lets you handle the error
//throw = the throw lets you create custome errors
//finally = allows you to run code regardless of the errors



try {
    console.log('Start of try runs');

    unicycle;

    console.log('end of try runs -- never reached');
} catch (error) {
    console.log('Error has occured: '+ error);

}finally{
    console.log('this is always run its a finally block');
}

console.log('execution after try block');


//another try

let json = '{"age":30}';

try{
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError('Incomplete data: no name');
    }
    console.log(user.name);   
}catch(e){
    console.log('JSON Error: ' + e);
}