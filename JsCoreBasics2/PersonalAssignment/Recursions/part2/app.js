// Recursion practice
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);  
    }
    console.log('Hooray');
}

countDown(3);
// 3
// 2
// 1
// Hooray


function countDownRecursive(n) {
    if(n<=0){
        console.log('Hooray');
        return 
    }
    console.log(n);
    return countDownRecursive(n - 1);
}

countDownRecursive(3)
// 3
// 2
// 1
// Hooray

//------------------------------------->

function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--){
        total += i      
    }
    console.log(total);
    return total
}

sumRange(5);//15

// function sumRangRec(n) {
//     let total = 0
//     total = total + n;
//     if(n === 0){
//         console.log(total);
//         return total
//     }
//     console.log(n);
//     sumRangRec(n - 1)
// }

// sumRangRec(5)//


function sumRangRecursive(n, total = 0) {
    if(n <= 0){
        console.log(total);
        return total
    }
    return sumRangRecursive(n-1 , total + n)
}

sumRangRecursive(5, 0)

// Another example
function printChildrenRecursive(t) {
    if(t.children.children === 0){
        return
    }
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
}

const tree = {
    name:'John', 
    children: [{
        name:'Jim',
        children:[]
    },
    {
        name:'Zoe',
        children: [
            {name:'Kyle', children:[]},
            {name:'Sophia', children:[]}
        ]
    }
    ],
}

printChildrenRecursive(tree)




// Array.reduce practice
const array2 = [1,2,3,4,5]

const sumReduce = array2.reduce((preV, curV)=> preV+=curV)
console.log(sumReduce);