"use strict"

const swap = (array, j) => {
    let temp = array[j];
    array[j] = array[j+1];
    array[j+1] = temp;
}

const bblSort = (array) => {

    for (let i=0; i<array.length; i++) {

        let isSorted = true; // assumption that array is already sorted at the start of pass #i

        for (let j=0; j<(array.length-i); j++) {
            if (array[j] > array[j+1]) {
                swap(array, j); 
                isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations       
            }
        }

        if (isSorted) { // even after iterations, our assumption was correct so we can end the outer loop here
            break;
        }

    }
    return array;
}


let myArray = [5, 1, 4, 2, 7, -1, 40, 3, 3, 0, 50];
// let myArray = [5, 1, 4, 2];
// let myArray = [1, 2, 3, 4];

console.log('original array: ', myArray);

myArray = bblSort(myArray);

console.log('-----------------');

console.log('sorted array: ', myArray);