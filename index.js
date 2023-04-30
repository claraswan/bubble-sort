import bubbleSort from './bubbleSort.js';
import Plotly from 'plotly.js';
const canvas = document.getElementById('canvas');
const start = document.getElementById('start-button');
const reset = document.getElementById('reset-button');
const submit = document.getElementById('submit-array');
const userInput = document.getElementById('user-input');
let yValues = [];
reset.style.display = 'none';
start.style.display = 'none';
function makeInitialChart(canvas, yValues, xValues, layout) {
    console.log('passed yValues:', yValues);
    const trace = {
        x: xValues,
        y: yValues,
        width: 0.8,
        type: 'bar',
        text: yValues.map(String),
        textposition: 'auto',
    };
    const data = [trace];
    Plotly.newPlot(canvas, data, layout);
}
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const xValues = [0, 1, 2, 3, 4, 5, 6]; // these are the indices
    console.log(userInput.value);
    if (userInput !== null && userInput.value !== '') {
        canvas.classList.add('active');
        start.style.display = 'flex';
        const userValues = userInput.value;
        const userValuesArray = userValues.split('');
        userValuesArray.forEach((num) => {
            yValues.push(parseInt(num));
        });
        makeInitialChart(canvas, yValues, xValues, layout);
    }
    else {
        alert('Please enter an array of integers');
    }
});
start.addEventListener('click', () => {
    console.log('yValues', yValues);
    canvas.innerHTML = '';
    reset.style.display = '';
    start.style.display = 'none';
    const newValues = bubbleSort(yValues);
    console.log('newValues', newValues);
});
reset.addEventListener('click', () => {
    reset.style.display = 'none';
    start.style.display = '';
    window.location.reload();
});
