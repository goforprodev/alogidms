let n = 1000
let arr =  new Array(n);
let num = 0;
// for(let i = 0; i < arr.length; i++){
//     num += 2;
//     arr[i] = num;
// }

function randomNumbers(){
    for(let i = 0; i < arr.length; i++){
        num =  Math.floor(Math.random() * n);
        arr[i] = num
    }
    console.log(arr)
}

randomNumbers()
// console.log(arr);