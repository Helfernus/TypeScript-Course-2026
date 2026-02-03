"use strict";
// Rest
Object.defineProperty(exports, "__esModule", { value: true });
const add = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    });
};
const addedNumbers = add(1, 2, 3, 4, 5, 6);
console.log(addedNumbers);
//# sourceMappingURL=nextGenJavaScript.js.map