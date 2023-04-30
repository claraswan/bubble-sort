export default function bblSort(numbers: Array<number>): Array<number> {
    for (let i=0; i<numbers.length-1; i++) {
        let isSorted = true; // assumption that array is already sorted at the start of pass #i
        for (let j=0; j<(numbers.length-1-i); j++) {
            if (numbers[j] > numbers[j+1]) {
                [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]];
                isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations    
            }
        }
        if (isSorted) { // end the outer loop here
            break;
        }
    }
    return numbers;
}