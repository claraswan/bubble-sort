var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { animate, wait2Seconds } from './utils.js';
export default function bblSort(numbers) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < numbers.length - 1; i++) {
            let isSorted = true; // assumption that array is already sorted at the start of pass #i
            for (let j = 0; j < (numbers.length - 1 - i); j++) {
                if (numbers[j] > numbers[j + 1]) {
                    [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                    isSorted = false; // if we end up swapping two items, then our previous assumption was wrong and we will make another pass of iterations    
                    animate(numbers);
                    yield wait2Seconds(numbers);
                }
            }
            if (isSorted) { // end the outer loop here
                break;
            }
        }
        return numbers;
    });
}
