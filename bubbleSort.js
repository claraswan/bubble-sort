"use strict";
exports.__esModule = true;
function bblSort(numbers) {
    var _a;
    for (var i = 0; i < numbers.length - 1; i++) {
        var isSorted = true; // assumption that array is already sorted at the start of pass #i
        for (var j = 0; j < (numbers.length - 1 - i); j++) {
            if (numbers[j] > numbers[j + 1]) {
                _a = [numbers[j + 1], numbers[j]], numbers[j] = _a[0], numbers[j + 1] = _a[1];
                // ^ Array destructuring, same as the below 3 lines:
                // let temp = numbers[j];
                // numbers[j] = numbers[j+1];
                // numbers[j+1] = temp;
                isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations       
            }
        }
        if (isSorted) { // end the outer loop here
            break;
        }
    }
    return numbers;
}
exports["default"] = bblSort;
