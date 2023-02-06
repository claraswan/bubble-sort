"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = __importDefault(require("./bubbleSort"));
const plotly_js_1 = __importDefault(require("plotly.js"));
const ogArray = document.getElementById('og_array');
const sortedArray = document.getElementById('sorted_array');
const canvas = document.getElementById('canvas');
const yValues = [9, 5, 1, 4, 7, 2, 0];
const myArray = [5, 1, 4, 2, 0];
const newArray = (0, bubbleSort_1.default)(myArray, yValues);
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
};
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
};
plotly_js_1.default.newPlot(canvas, data, layout);
