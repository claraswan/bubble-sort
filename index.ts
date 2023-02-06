import bubbleSort from './bubbleSort';
import Plotly from 'plotly.js';

const ogArray = <HTMLDivElement>document.getElementById('og_array');
const sortedArray = <HTMLDivElement>document.getElementById('sorted_array');
const canvas = <HTMLDivElement>document.getElementById('canvas');
const yValues = [9, 5, 1, 4, 7, 2, 0]; 
const myArray = [5, 1, 4, 2, 0];
const newArray = bubbleSort(myArray, yValues);

ogArray.innerText = 'Original array: ' + yValues;
sortedArray.innerText = 'Sorted array: ' + newArray;

const xValue = [0, 1, 2, 3, 4, 5, 6]; // these are the indices

//this is the actual array (unsorted)

const trace1 = {
    x: xValue,
    y: yValues,
    width: 0.8,
    type: 'bar',
    text: yValues.map(String),
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