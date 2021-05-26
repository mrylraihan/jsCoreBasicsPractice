const numbersList = [1,2,3,4,5,6,7,8];
numbersList.push(6);
const filteredList = numbersList.filter(numList=>numList>5);
console.log(filteredList);


const mapList = filteredList.map(numbersG5=>({nums:numbersG5}));
console.log(mapList);

const total = numbersList.reduce((preValue, curValue)=>preValue * curValue);
console.log(total);
//another way to write it a forloop
// let sum = 1;
// for(let nums of numbersList){
//     sum *=nums
// }
// console.log(sum);


function findMax (numbersList){
    let maxNum1 = numbersList.sort((a,b)=>b-a);
    let maxNumInList1 = maxNum1[0];
    let minNumInList2 = maxNum1[numbersList.length-1]
    let minAndMax1 = [maxNumInList1,minNumInList2];
    console.log('findMax&min '+ minAndMax1);
}
findMax(numbersList);

function findMax1(a){
    let max = a[0];
    let min = a[0];
    for(let i = 1; i<a.length; i++){
        if(a[i]>max){
            max = a[i];
        }else if(a[i]<min){
            min = a[i];
        }
    }
    const maxAndMin = [min,max];
    console.log('findMax&min1 '+maxAndMin);
    
}

findMax1(numbersList);

const setList = new Set([...numbersList]);
console.log(setList);


//his solution 

function findMax2(...nums){
    let curMax = nums[0];
    for(const num of nums){
        if(num > curMax){
            curMax = num;
        }
    }
    return curMax
}
console.log(findMax2(...numbersList));

function findMinMax(...nums){
    let curMax = nums[0];
    let curMin = nums[0];
    for(const num of nums){
        if(num > curMax){
            curMax = num;
        }
        if(num < curMin){
            curMin = num;
        }
    }
    return [curMin,curMax];
}
const [min,max] =findMinMax(...numbersList);
console.log(min,max);
