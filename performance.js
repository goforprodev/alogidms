import {insertionSort} from "./insertionSort";

const performance = require('perf_hooks');

function timeTaken(){
    let start = performance.now()
    console.log(`The Algorithm started at: ${start} ms`)

    console.log(insertionSort(arr, n))

    let end = performance.now()
    console.log(`The Algorithm ended at: ${end} ms`)

    let runtime = (Math.floor(end - start )) / 1000
    console.log(`Time taken for Algorithm to run is: ${runtime} seconds`)
}

timeTaken()