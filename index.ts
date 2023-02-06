import bubbleSort from './bubbleSort.js';

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const start = <HTMLButtonElement>document.getElementById('start-button');
const reset = <HTMLButtonElement>document.getElementById('reset-button');
const form = <HTMLFormElement>document.querySelector('.input__form');
const submit = <HTMLButtonElement>document.querySelector('.btn-submit');
const userInput = <HTMLInputElement>document.getElementById('user-input');
let yValues: Array<number> = [];
let xValues: Array<number>= [];
reset.style.display = 'none';
start.style.display = 'none';

function makeInitialChart(yValues: Array<number>, xValues: Array<number>) {
    console.log(yValues);
    const svg = d3.selectAll('canvas')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    svg.selectAll('rect')
        .data(yValues)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 70)
        .attr('y', (d, i) => 300 - 10 * d)
        .attr('width', 65)
        .attr('height', (d, i) => d * 10)
        .attr('fill', 'blue');

    svg.append('text')
        .attr('x', 100)
        .attr('y', 100)
        .text('chart');

    console.log('here they are', yValues, xValues);

}

submit.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    if (userInput !== null && userInput.value !== '') {
        canvas.style.display = 'flex';
        start.style.display = 'flex';
        form.style.display = 'none';
        const formData = new FormData(form);
        const userValues = formData.get('user-array') as string;
        const userValuesArray = userValues.split(' ');
        userValuesArray.forEach((num: string, i: number) => {
            yValues.push(parseInt(num));
            xValues.push(i);
        });
        makeInitialChart(yValues, xValues);
    } else {
        alert('Please enter an array of integers');
    }
    form.reset();
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
