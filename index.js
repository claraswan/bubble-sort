import bubbleSort from './bubbleSort.js';
var canvas = document.getElementById('canvas');
var start = document.getElementById('start-button');
var reset = document.getElementById('reset-button');
var form = document.querySelector('.input__form');
var submit = document.querySelector('.btn-submit');
var userInput = document.getElementById('user-input');
var yValues = [];
var xValues = [];
reset.style.display = 'none';
start.style.display = 'none';
function makeInitialChart(yValues, xValues) {
    console.log(yValues);
    var svg = d3.selectAll('canvas')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);
    svg.selectAll('rect')
        .data(yValues)
        .enter()
        .append('rect')
        .attr('x', function (d, i) { return i * 70; })
        .attr('y', function (d, i) { return 300 - 10 * d; })
        .attr('width', 65)
        .attr('height', function (d, i) { return d * 10; })
        .attr('fill', 'blue');
    svg.append('text')
        .attr('x', 100)
        .attr('y', 100)
        .text('chart');
    console.log('here they are', yValues, xValues);
}
submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (userInput !== null && userInput.value !== '') {
        canvas.style.display = 'flex';
        start.style.display = 'flex';
        form.style.display = 'none';
        var formData = new FormData(form);
        var userValues = formData.get('user-array');
        var userValuesArray = userValues.split(' ');
        userValuesArray.forEach(function (num, i) {
            yValues.push(parseInt(num));
            xValues.push(i);
        });
        makeInitialChart(yValues, xValues);
    }
    else {
        alert('Please enter an array of integers');
    }
    form.reset();
});
start.addEventListener('click', function () {
    reset.style.display = '';
    start.style.display = 'none';
    bubbleSort(yValues);
});
reset.addEventListener('click', function () {
    reset.style.display = 'none';
    start.style.display = '';
    window.location.reload();
});
