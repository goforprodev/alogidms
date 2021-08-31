// Algorithm
// To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor, compare it to the elements before.
// Move the greater elements one position up to make space for the swapped element.


//Create an insertions sort function that takes in an array and the
//length of the array as its paramenter
//compare the key to its predecessor
const { performance } = require('perf_hooks');
function insertionSort(arr , len){
    let i ,j ,key;
//create a for loop that goes through the array from the starting index of 1
//    set variables i ,j and a key
    for(let i = 1; i < len; i++){

        //    set the key var to the current interation
        key = arr[i]
        //set the predecessor to j
        j  = (i - 1)
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j-=1
        }
        arr[j + 1] = key;

    }
    return arr;
}

let arr = [ 12, 4, 8, 10, 5 ]
let n = arr.length

timeTaken();

function timeTaken() {
    let start = performance.now()
    console.log(`The Algorithm started at: ${start} ms`)

    console.log(insertionSort(arr, n))

    let end = performance.now()
    console.log(`The Algorithm ended at: ${end} ms`)

    let runtime = (Math.floor(end - start )) / 1000
    console.log(`Time taken for Algorithm to run is: ${runtime} seconds`)

}