let n = 1000000
let arr =  new Array(n);
let num = 0;

function randomNumbers(){
    for(let i = 0; i < arr.length; i++){
        num =  Math.floor(Math.random() * n);
        arr[i] = num
    }
    return arr;
}

let randArr = randomNumbers()
// let n = arr.length
let leftP = 0
let rightP = n - 1

//create a swap function
function swap(arr,leftP,rightP){
    let temp = arr[leftP]
    arr[leftP] = arr[rightP]
    arr[rightP] = temp;

}
function partition(arr, i ,j){
    let pivot = arr[Math.floor((i + j) / 2)]

    while(i <= j){
        while(arr[i] < pivot){
            i++
        }
        while(arr[j] > pivot){
            j--
        }
        if(i <= j){
            swap(arr,i,j)
            i++
            j--
        }
    }
    return i
}

function quickSort(arr,i,j){
    var index
    if(arr.length > 1){
        index = partition(arr,i,j)
        if(i < index - 1){
            quickSort(arr,i,index-1)
        }
        if(index < j){
            quickSort(arr,index,j)
        }
    }
    return arr
}

let sortedArray = quickSort(randArr,leftP,rightP);
console.log(sortedArray);