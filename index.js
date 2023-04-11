import bubbleSort from './bubbleSort.js';
import Plotly from 'plotly.js';
const canvas = document.getElementById('canvas');
const start = document.getElementById('start-button');
const reset = document.getElementById('reset-button');
const form = document.querySelector('.input__form');
const submit = document.querySelector('.btn-submit');
const userInput = document.getElementById('user-input');
let yValues = [];
reset.style.display = 'none';
start.style.display = 'none';
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
function makeInitialChart(canvas, yValues, xValues, layout) {
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
    if (userInput !== null && userInput.value !== '') {
        canvas.classList.add('active');
        start.style.display = 'flex';
        form.style.display = 'none';
        const formData = new FormData(form);
        const userValues = formData.get('user-array');
        const userValuesArray = userValues.split(' ');
        userValuesArray.forEach((num) => {
            yValues.push(parseInt(num));
        });
        makeInitialChart(canvas, yValues, xValues, layout);
    }
    else {
        alert('Please enter an array of integers');
    }
    form.reset();
});
start.addEventListener('click', () => {
    canvas.innerHTML = '';
    reset.style.display = '';
    start.style.display = 'none';
    bubbleSort(yValues);
});
reset.addEventListener('click', () => {
    reset.style.display = 'none';
    start.style.display = '';
    window.location.reload();
});
