"use strict"

const xValue = [0, 1, 2, 3, 4, 5, 6]; //these are the indices
const yValue = [5, 9, 1, 4, 7, 2, 0]; //this is the actual array

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

// let myArray = [5, 1, 4, 2, 0];

ogArray.innerText = 'Original array: ' + yValue;

let newArray = bblSort(yValue);

sortedArray.innerText = 'Sorted array: ' + newArray;


//// PLOTLY ////

const canvas = document.getElementById('canvas');

const trace1 = {
    x: xValue,

    y: yValue,

    width: 0.8,
  
    type: 'bar',
  
    text: yValue.map(String),
  
    textposition: 'auto',
}

const data = [trace1];

const layout = {

    title: 'Bubble Sort Visualizer',

    showlegend: false,

    yaxis: {
  
      zeroline: false,
      visible: false,
      showticklabels: false,
      gridwidth: 1
  
    },

    xaxis: {
        visible: false,
        showticklabels: false
    },
              
    bargap: 0.01
  
}

Plotly.newPlot(canvas, data, layout);