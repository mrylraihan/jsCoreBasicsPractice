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