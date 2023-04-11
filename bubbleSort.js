import Plotly from 'plotly.js';
export default function bblSort(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let isSorted = true; // assumption that array is already sorted at the start of pass #i
        for (let j = 0; j < (numbers.length - 1 - i); j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                // ^ Array destructuring, same as the below 3 lines:
                // let temp = numbers[j];
                // numbers[j] = numbers[j+1];
                // numbers[j+1] = temp;
                isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations    
                animateSort(numbers);
            }
        }
        if (isSorted) { // end the outer loop here
            break;
        }
    }
    return numbers;
}
function animateSort(yValues) {
    const canvas = document.getElementById('canvas');
    Plotly.animate(canvas, {
        data: [{ y: yValues, text: yValues.map(String) }],
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
    });
}
