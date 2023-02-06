import bubbleSort from './bubbleSort.js';
import * as d3 from 'd3';

window.addEventListener('load', () => {
    const canvas = <HTMLDivElement>document.getElementById('canvas');
    const start = <HTMLButtonElement>document.getElementById('start-button');
    const reset = <HTMLButtonElement>document.getElementById('reset-button');
    const form = <HTMLFormElement>document.querySelector('.input__form');
    const submit = <HTMLButtonElement>document.querySelector('.btn-submit');
    const userInput = <HTMLInputElement>document.getElementById('user-input');
    const inputBox = <HTMLDivElement>document.querySelector('.input');
    let data: {index: number, num: number}; // index: the indices of each number (x values), num: the actual numbers to be sorted (y values)
    reset.style.display = 'none';
    start.style.display = 'none';
    
    const element = d3.selectAll('div');
    
    submit.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        console.log('something');
        if (userInput !== null && userInput.value !== '') {
            inputBox.style.display = 'none';
            start.style.display = '';
            canvas.style.display = '';
            const formData = new FormData(form);
            const userValues = formData.get('user-array') as string;
            const userValuesArray = userValues.split(' ');
            userValuesArray.forEach((num: string, index: number) => {
                data.index = parseInt(num);
            });
            console.log(userValuesArray);
        } else {
            alert('Please enter an array of integers');
        }
        form.reset();
    });
    
    start.addEventListener('click', () => {
        reset.style.display = '';
        start.style.display = 'none';
        bubbleSort(Object.values(data));
    })
    
    reset.addEventListener('click', () => {
        reset.style.display = 'none';
        start.style.display = '';
        window.location.reload();
    })
})