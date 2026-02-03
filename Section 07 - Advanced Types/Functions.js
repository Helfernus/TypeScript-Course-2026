"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(val) {
    // return val.length;
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} Words`;
    }
    else {
        return val.length;
    }
}
const numOfWords = getLength('Does this work?');
const numItems = getLength(['Sports', 'Cookies']);
console.log('Number of Words: ', numOfWords);
console.log('Number of Items: ', numItems);
//# sourceMappingURL=Functions.js.map