import bubbleSort from './bubbleSort.js';
import Plotly from 'plotly.js';

const canvas = <HTMLDivElement>document.getElementById('canvas');
const start = <HTMLButtonElement>document.getElementById('start-button');
const reset = <HTMLButtonElement>document.getElementById('reset-button');
const submit = <HTMLButtonElement>document.getElementById('submit-array');
const userInput = <HTMLInputElement>document.getElementById('user-input');
let yValues: Array<number> = [];
reset.style.display = 'none';
start.style.display = 'none';

function makeInitialChart(canvas: HTMLDivElement, yValues: Array<number>, xValues: Array<number>, layout: { [index:string]:boolean|string|{} }) {
    console.log('passed yValues:', yValues);
    const trace = {
        x: xValues,
        y: yValues,
        width: 0.8,
        type: 'bar',
        text: yValues.map(String),
        textposition: 'auto',
    }

    const data = [trace] as Plotly.Data[];

    Plotly.newPlot(canvas, data, layout);
}

submit.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    const xValues = [0, 1, 2, 3, 4, 5, 6]; // these are the indices
    console.log(userInput.value);
    if (userInput !== null && userInput.value !== '') {
        canvas.classList.add('active');
        start.style.display = 'flex';
        const userValues = userInput.value;
        const userValuesArray = userValues.split('');
        userValuesArray.forEach((num: string) => {
            yValues.push(parseInt(num));
        });
        makeInitialChart(canvas, yValues, xValues, layout);
    } else {
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
})

reset.addEventListener('click', () => {
    reset.style.display = 'none';
    start.style.display = '';
    window.location.reload();
})
