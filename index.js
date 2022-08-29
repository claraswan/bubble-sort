"use strict"

const ogArray = document.getElementById('og_array');
const sortedArray = document.getElementById('sorted_array');
const canvas = document.getElementById('canvas');
const otherCanvas = document.getElementById('canvas2');
const xValue = [0, 1, 2, 3, 4, 5, 6]; //these are the indices
const yValue = [5, 9, 1, 4, 7, 2, 8]; //this is the actual array

//// PLOTLY ////
const trace1 = {
    x: xValue,
    y: yValue,
    width: 0.8,
    type: 'bar',
    text: yValue.map(String),
    textposition: 'auto',
}

const data1 = [trace1];

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

Plotly.newPlot(canvas, data1, layout);
/// END ///

/// Functions ///
function wait2Seconds(array) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(array)
        }, 2000)
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

    let num = 0;
    // let iArray = [];
    console.log('initial array: ' + array);

    for (let i=0; i<array.length; i++) {

        let isSorted = true; // assumption that array is already sorted at the start of pass #i
        
        for (let j=0; j<(array.length); j++) {
            
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations       
                // iArray.push(num);
                randomize(array);

                const result = await wait2Seconds(array);
                console.log('iteration round ' + num + ': ' + result);
                num++;
            }

        }

        if (isSorted) { // even after iterations, our assumption was correct so we can end the outer loop here
            console.log('array sorted!');
            break;
        }
    }
    // return array;

}
/// End ///

bblSort(yValue);