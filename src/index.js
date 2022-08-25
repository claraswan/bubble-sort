"use strict"

import './main.css';
const Plotly = require('plotly.js-basic-dist');
// import bblSort from './algo.js';

const bblSort = (array) => {
    for (let i=0; i<array.length; i++) {
        let isSorted = true; // assumption that array is already sorted at the start of pass #i
        for (let j=0; j<(array.length-i); j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations       
            }
        }
        if (isSorted) { // even after iterations, our assumption was correct so we can end the outer loop here
            break;
        }
    }
    return array;
}

const ogArray = document.getElementById('og_array');
const sortedArray = document.getElementById('sorted_array');

let myArray = [5, 1, 4, 2, 7, -1, 40, 3, 3, 0, 50];

ogArray.innerText = 'Original array: ' + myArray;

let newArray = bblSort(myArray);

sortedArray.innerText = 'Sorted array: ' + newArray;

const canvas = document.getElementById('canvas');
Plotly.newPlot(canvas, [{

	x: [1, 2, 3, 4, 5],

	y: [1, 2, 4, 8, 16] }], {

	margin: { t: 0 } } );