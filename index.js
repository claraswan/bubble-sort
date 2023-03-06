import bubbleSort from './bubbleSort.js';
const canvas = document.getElementById('canvas');
const start = document.getElementById('start-button');
const reset = document.getElementById('reset-button');
const form = document.querySelector('.input__form');
const submit = document.querySelector('.btn-submit');
const userInput = document.getElementById('user-input');
let yValues = [];
reset.style.display = 'none';
start.style.display = 'none';
function makeInitialChart(yValues) {
    const upperBoundY = Math.max.apply(0, yValues) + 10;
    const availableWidth = parseInt((getComputedStyle(canvas).width).split('.')[0]);
    const availableHeight = parseInt((getComputedStyle(canvas).height).split('.')[0]);
    const x = d3.scaleBand()
        .domain(yValues.map(value => String(value)))
        .rangeRound([0, availableWidth])
        .padding(.1);
    const y = d3.scaleLinear()
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
        .attr('width', x.bandwidth())
        .attr('height', data => availableHeight - y(data))
        .attr('x', data => x(String(data)))
        .attr('y', data => y(data))
        .text(data => data);
    chart
        .selectAll('.label')
        .data(yValues)
        .enter()
        .append('text')
        .text(data => data)
        .attr('x', data => x(String(data)) + x.bandwidth() / 2)
        .attr('y', data => y(data) - 10)
        .attr('text-anchor', 'middle')
        .classed('label', true);
}
submit.addEventListener('click', (e) => {
    e.preventDefault();
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
        makeInitialChart(yValues);
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
    const newValues = bubbleSort(yValues);
    makeInitialChart(newValues);
});
reset.addEventListener('click', () => {
    reset.style.display = 'none';
    start.style.display = '';
    window.location.reload();
});
