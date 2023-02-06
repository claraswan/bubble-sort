"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bblSort(numbers, yValues) {
    for (let i = 0; i < numbers.length; i++) {
        let isSorted = true; // assumption that numbers is already sorted at the start of pass #i
        for (let j = 0; j < (numbers.length - i); j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
                yValues = numbers;
                isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations
            }
        }
        if (isSorted) { // even after iterations, our assumption was correct so we can end the outer loop here
            break;
        }
    }
    return numbers;
}
exports.default = bblSort;
