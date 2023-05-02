import bubbleSort from './bubbleSort.js';
import { makeInitialChart, range } from './utils.js';
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const start = document.getElementById('start');
    const reset = document.getElementById('reset');
    const submit = document.getElementById('submit');
    const userInput = document.getElementById('userArray');
    let yValues = [];
    reset.style.display = 'none';
    start.style.display = 'none';
    const layout = {
        title: 'Bubble Sort',
        showlegend: false,
        xaxis: {
            visible: false
        },
        yaxis: {
            zeroline: false,
            gridwidth: 2
        },
        bargap: 0.05
    };
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (userInput !== null && userInput.value !== '') {
            canvas.classList.add('active');
            start.style.display = 'flex';
            const userValues = userInput.value;
            const userValuesArray = userValues.split(' ');
            const xValues = range(0, userValuesArray.length);
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
        reset.style.display = '';
        start.style.display = 'none';
        bubbleSort(yValues);
    });
    reset.addEventListener('click', () => {
        reset.style.display = 'none';
        start.style.display = '';
        window.location.reload();
    });
});
