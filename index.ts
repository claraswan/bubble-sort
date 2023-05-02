import bubbleSort from './bubbleSort.js';
import { makeInitialChart, range } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = <HTMLDivElement>document.getElementById('canvas');
    const start = <HTMLButtonElement>document.getElementById('start');
    const reset = <HTMLButtonElement>document.getElementById('reset');
    const submit = <HTMLButtonElement>document.getElementById('submit');
    const userInput = <HTMLInputElement>document.getElementById('userArray');
    let yValues: Array<number> = [];
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

    submit.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        if (userInput !== null && userInput.value !== '') {
            canvas.classList.add('active');
            start.style.display = 'flex';
            const userValues = userInput.value;
            const userValuesArray = userValues.split(' ');
            const xValues = range(0, userValuesArray.length);
            userValuesArray.forEach((num: string) => {
                yValues.push(parseInt(num));
            });
            makeInitialChart(canvas, yValues, xValues, layout);
        } else {
            alert('Please enter an array of integers');
        }
    });
    
    start.addEventListener('click', () => {
        reset.style.display = '';
        start.style.display = 'none';
        bubbleSort(yValues);
    })
    
    reset.addEventListener('click', () => {
        reset.style.display = 'none';
        start.style.display = '';
        window.location.reload();
    })
    
})
