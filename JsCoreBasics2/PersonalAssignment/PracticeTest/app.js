// let n = 123456
// const sumAndSubtract = (a)=>{
//     let b = ""+a
//     const numlist = b.split('')
//     let totalSum = 0
//     numlist.forEach(num=>{
//         totalSum+= +num
//     })
//     console.log(totalSum);
//     let totalMutl = 1
//     numlist.forEach(num=>{
//         totalMutl*= +num
//     })
//     console.log(totalMutl);
//    console.log(totalMutl - totalSum)
// }

// sumAndSubtract(n)


const className = 'abbzccc'
const methodName = 'babzzcz'

const checkMethod = (a,b)=>{
    if(a.length == b.length){
     let newWord =a.split('').sort().join('')
     let newWord2 =b.split('').sort().join('')
     
      if(newWord === newWord2){
          console.log(true);
      }else{
          console.log(false)
      }

    }else{
        console.log(false);
    }

}

checkMethod(className,methodName)