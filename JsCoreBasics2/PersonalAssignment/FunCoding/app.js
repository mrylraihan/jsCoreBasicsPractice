const list = [1,2,3,4]
const list2 = [1,2,4,4]

const getTarget = (arr, target)=>{
    let result = [];
    arr.forEach((ele,idx) => {
        let remainder = target - ele;
        if(arr.includes(remainder) && idx !== arr.indexOf(remainder) && result.length<1){
            result.push(remainder, ele)
        }
    });
    return result.length>0 ? result :'sorry'
}

console.log(getTarget(list2, 10))