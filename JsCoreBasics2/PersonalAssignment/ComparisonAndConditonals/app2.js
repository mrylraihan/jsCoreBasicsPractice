const btn = document.getElementById('counter');
let count= 0;
function counting(){
count = count+ 1;
console.log(count);
if(count %2 == 0 ){
    alert(`HEY ITS ${count}`);
    }
return count;
}

btn.addEventListener('click', counting);