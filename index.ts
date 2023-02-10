import bubbleSort from './bubbleSort.js';

const canvas = <HTMLDivElement>document.getElementById('canvas');
const start = <HTMLButtonElement>document.getElementById('start-button');
const reset = <HTMLButtonElement>document.getElementById('reset-button');
const form = <HTMLFormElement>document.querySelector('.input__form');
const submit = <HTMLButtonElement>document.querySelector('.btn-submit');
const userInput = <HTMLInputElement>document.getElementById('user-input');
let yValues: Array<number> = [];
reset.style.display = 'none';
start.style.display = 'none';

function makeInitialChart(yValues: Array<number>) {

    const upperBoundY = Math.max.apply(0, yValues) + 10;
    const availableWidth: number= parseInt((getComputedStyle(canvas).width).split('.')[0]);
    const availableHeight: number= parseInt((getComputedStyle(canvas).height).split('.')[0]);

    const scaleX = d3.scaleBand()
        .domain(yValues.map(value => String(value)))
        .rangeRound([0, availableWidth])
        .padding(.1);

    const scaleY = d3.scaleLinear()
        .domain([0, upperBoundY])
        .range([availableHeight, 0]);

    const chart = d3.select(canvas)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%');

    chart.selectAll('rect')
        .data(yValues)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', scaleX.bandwidth())
        .attr('height', data => availableHeight - scaleY(data))
        .attr('x', data => scaleX(String(data)))
        .attr('y', data => scaleY(data))
        .text(data => data);

    chart
        .selectAll('text')  
        .data(yValues)
        .enter()  
        .append('text')
        .attr('x', data => scaleX(String(data)))
        .attr('y', data => scaleY(data))
        .classed('text', true)
        .text(data => data);
}

submit.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    if (userInput !== null && userInput.value !== '') {
        canvas.classList.add('active');
        start.style.display = 'flex';
        form.style.display = 'none';
        const formData = new FormData(form);
        const userValues = formData.get('user-array') as string;
        const userValuesArray = userValues.split(' ');
        userValuesArray.forEach((num: string) => {
            yValues.push(parseInt(num));
        });
        makeInitialChart(yValues);
    } else {
        alert('Please enter an array of integers');
    }
    form.reset();
});

start.addEventListener('click', () => {
    canvas.innerHTML = '';
    reset.style.display = '';
    start.style.display = 'none';
    const newValues = bubbleSort(yValues);
    makeInitialChart(newValues);
})

reset.addEventListener('click', () => {
    reset.style.display = 'none';
    start.style.display = '';
    window.location.reload();
})
