// Recursion

// regular Way 

// function powerOf(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//        result *= x;
//     }
//     return result;
// }

// function powerOf(x, n) {
//     if(n === 1){
//         return x
//     }
//     return x * powerOf(x , n - 1)
// }

function powerOf(x, n) {
	if (n === 1) {
		console.log(n, x);
        console.log("n once its true: "+n, "x value once its true: "+ x);
		return x
	}
    console.log(n, x)
	console.log('n once its true: ' + n, 'x value once its true: ' + x)
	return x * powerOf(x, n - 1)
    // return n === 1 ? x : x * powerOf(x, n - 1)
}

console.log(powerOf(2,3))// 2 * 2 * 2 = 8 



// Another example
function countDown(n) {
	if(n === 0){
		console.log(n);
		return n
	}
	console.log(n);
	return countDown(n - 1)
}

countDown(10)

const array = [1,2,3,4,5]

function countDownArray(a, al) {
	if(al === 0 ){
		console.log(a[al]);
		return a[al]
	}
	console.log(a[al])
	return countDownArray(a, al - 1)
}

countDownArray(array, array.length-1)

function countUpArray(a, al) {
	if (al === a.length - 1) {
		console.log(a[al])
		return a[al]
	}
	console.log(a[al])
	return countUpArray(a, al + 1)
}

countUpArray(array, 0)


function countUpWord(a, al) {
	if (al === a.length - 1) {
		console.log(a[al])
		return a[al]
	}
	console.log(a[al])
	return countUpWord(a, al + 1)
}

countUpWord('Hellooooo', 0)


//--------------------------------------------->


const unsorted = [2,6,4,97,9,10, 300, 378, 47, 88, 1, 11, -5, -100]
 
function getIndex(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > val) {
			return i
		}
	}
	return arr.length
}

function sortedArray(arr) {
	if (arr === null || arr.length === 0 || arr.length === 1) {
		return arr
	} else {
		let sortedArr = sortedArray(arr.slice(1))
		let value = arr[0]
		let idx = getIndex(sortedArr, value)
		sortedArr.splice(idx, 0, value)
		return sortedArr
	}
}

const newArr = sortedArray(null)
console.log(newArr)
