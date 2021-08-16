// let j = 0;
// do{
//     console.log(j+ ': outloop');
//     for(let k = 0; k < 5 ; k++){
//         if (k === 3) {
//             break;
//         }
//         console.log(k+ ': innerloop');
//     }
//     j++;
// }while(j < 3);

//labels work with both break and continue
let j = 0;
outerWhile: do{ // outerwhile is a label
    console.log(j+ ': outloop');
    innerfor :for(let k = 0; k < 5 ; k++){ // label for innerfor
        // if (k === 3) {
        //     break outerWhile;
        // }
      
        console.log(k+ ': innerloop');
    }
    // if (j === 1) {
    //     break outerWhile;
    // }
    j++;
}while(j < 3);