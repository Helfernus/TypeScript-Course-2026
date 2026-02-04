"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let validKey;
validKey = "age";
validKey = "name";
function getProp(obj, key) {
    const value = obj[key];
    if (value === undefined || value === null) {
        throw new Error('Accessing undefined or null value!');
    }
    return value;
}
const user = { name: 'Juan', age: 23, gender: 'M' };
const hisName = getProp(user, "name");
console.log(hisName);
//# sourceMappingURL=KeyOf.js.map