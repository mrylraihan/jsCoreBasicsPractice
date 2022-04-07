const callBackFn = (cb, fName, lName) => {
    cb(fName + ' ' + lName)
}

const fullName = (fName, lName) => {
    return new Promise((resolve, reject) => {
        callBackFn(() => {
            if (!fName || !lName) reject('one of the names is invalid')
            resolve('correct input ' + fName + ' ' + lName)
        }, fName, lName)
    })
}
const testPromise = () => {
    return fullName('Wayel', 'Raihan')
        .then(data => {
            console.log(data);
            return data
        })
        .catch(error => console.log(error))
}

testPromise()//correct input Wayel Raihan

const callBackSum = (cb, num1, num2) => {
    cb(num1 + num2)
}

const Sum = (num1, num2) => {
    return new Promise((resolve, reject) => {
        callBackSum(() => {
            if (!num1 || !num2) reject('one of the nums is invalid')
            resolve(num1 + num2, ' correct input')
        }, num1, num2)
    })
}
const testPromise2 = () => {
    return Sum(4, 5)
        .then(data => {
            console.log(data);
            return data
        })
        .catch(error => console.log(error))
}


testPromise2()//9

Promise.any([testPromise(), testPromise2()]).then(console.log).catch(console.error)