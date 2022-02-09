const array = ['a', 'b', 'c', 'd', 'e']
const randomArray = (arr) => {
    const newOrder = []
    const rndOrder = []
    while (newOrder.length !== arr.length) {
        let rn = Math.floor(Math.random() * arr.length)
        if (newOrder.indexOf(rn) === -1) {
            newOrder.push(rn)
        }
    }


    newOrder.forEach((ele) => {
        rndOrder.push(arr[ele])
    })
    return rndOrder
}

const test = randomArray(array)
console.log(test);