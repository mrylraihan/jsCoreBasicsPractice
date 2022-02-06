// https://www.javascripttutorial.net/javascript-stack/

// stacks data structure
// first in last out

// we use push() and on to the stack,  and pop() removes from the top

// isEmpty - check to see if there are any items in a queue.
// enqueue - add an item to the tail of a queue.
// dequeue - remove an item from the head of a queue and return it

let stack = [];

stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1,2]

stack.push(3);
console.log(stack); // [1,2,3]

stack.push(4);
console.log(stack); // [1,2,3,4]

stack.push(5);
console.log(stack); // [1,2,3,4,5]


const word = "words"

const reverseWord = (w)=>{
    w = Array.from(w)
    let rWord = ''
    for(let i = 0; 0 < w.length ; i++){
        rWord+=w.pop()
    }
    return rWord
}

console.log(reverseWord(word))