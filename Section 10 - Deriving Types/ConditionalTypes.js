"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let text = 1;
function getFullName(person) {
    if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error('No first name and / or last name found.');
}
// const name1 = getFullName({});
const name2 = getFullName({ firstName: 'John', lastName: 'Doe' });
console.log(name2);
//# sourceMappingURL=ConditionalTypes.js.map