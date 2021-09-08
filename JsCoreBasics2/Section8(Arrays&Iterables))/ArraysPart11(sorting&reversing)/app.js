//Sorting and Reversing
//
const prices  =[10, 29, 3, 4 ,11];

const sortedPrices = prices.sort((a, b)=>{
    if(a>b){
        return 1;
    }else if (a === b) {
        return 0
    }else{
        return -1;
    }
});

console.log(sortedPrices);

console.log(sortedPrices.reverse());
