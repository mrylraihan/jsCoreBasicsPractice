function callBackFN(cb, fName, lName) {
	return cb(fName + ' ' + lName);
}

const fullName = (fName, lName)=>{
    const promise = new Promise((resolve, reject)=>{
        callBackFN(()=>{
            if(!fName || !lName)reject('one or more paramters are empty or undefined');
            resolve(fName + ' ' + lName);
        }, fName,lName);
    });
    return promise;
}

const testPromise = async ()=>{
    const fName = await fullName('Wallie', 'Raihan')
    console.log(fName);
}


testPromise();

// testing Await