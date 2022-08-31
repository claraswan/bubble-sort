"use strict"

const canvas = document.getElementById('canvas');
const start = document.getElementById('start-button');
const reset = document.getElementById('reset-button');
const arrayForm = document.getElementById('array-input');
const userArray = document.getElementById('user-array');
const yValue = [];
const xValue = [];
canvas.style.display = 'none';
reset.style.display = 'none';
start.style.display = 'none';

//// PLOTLY ////

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

}

arrayForm.addEventListener('submit', (event) => {
    
    event.preventDefault();

    if (userArray.value !== '') {
        arrayForm.style.display = 'none';
        start.style.display = '';
        let userInput = userArray.value.trim();
        let userInputArray = userInput.split(' ');
        
        for (const number of userInputArray) {
            yValue.push(parseInt(number));
        }

        for (let i=0; i<yValue.length; i++) {
            xValue.push(i);
        }

        const trace1 = {
            x: xValue,
            y: yValue,
            width: 0.9,
            type: 'bar',
            text: yValue.map(String),
            textposition: 'auto',
            marker:{color: '#664080'}
        }

        const data1 = [trace1];
        canvas.style.display = '';
        Plotly.newPlot(canvas, data1, layout);
        
    } else {
        alert('Please enter an array of integers');
    }

});

/// END ///

/// Functions ///
function wait2Seconds(array) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(array)
        }, 1000)
    })
}

function randomize(array) {
    Plotly.animate(canvas, {
        data: [{y: array, text: array.map(String)}],
        traces: [0],
        layout: {}
    }, {
        transition: {
        duration: 500,
        easing: 'cubic-in-out'
        },
        frame: {
        duration: 500
        }
    })
}
/// END ///

/// Sorting Algorithm ///
async function bblSort(array) {
    
    console.log('initial array: ' + array);

    for (let i=0; i<array.length; i++) {

        let isSorted = true; // assumption that array is already sorted at the start of pass #i
        
        for (let j=0; j<(array.length); j++) {
            
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations       
               
                randomize(array);

                await wait2Seconds(array);
            }

        }

        if (isSorted) { // even after iterations, our assumption was correct so we can end the outer loop here
            console.log('array sorted!');
            break;
        }
    }
}
/// End ///

start.addEventListener('click', () => {
    reset.style.display = '';
    start.style.display = 'none';
    bblSort(yValue);
})

reset.addEventListener('click', () => {
    reset.style.display = 'none';
    start.style.display = '';
    window.location.reload();
})