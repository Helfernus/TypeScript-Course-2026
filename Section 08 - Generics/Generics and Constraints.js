"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// T i.e. Placeholders are Parameters for the Generic Type
function mergeObject(a, b) {
    return { ...a, ...b };
}
const merged = mergeObject({ firstName: 'Souradeep', lastName: 'Mukherjee' }, { age: 28 });
console.log(merged);
//# sourceMappingURL=Generics%20and%20Constraints.js.map