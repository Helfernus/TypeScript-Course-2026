"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mathOperations = {
    add(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a - b;
    },
};
// let mathResults: Results = {
//   add: mathOperations.add(1, 2),
//   substract: mathOperations.substract(3, 1),
// }
let mathResults = {
    add: mathOperations.add(1, 2),
    substract: mathOperations.substract(3, 1),
};
mathResults.add = 10;
console.log(mathResults);
//# sourceMappingURL=MappedTypes.js.map