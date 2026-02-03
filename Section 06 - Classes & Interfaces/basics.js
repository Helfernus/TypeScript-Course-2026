"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
// Shortcut to Create Classes
class ShortCutUser {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const arthur = new ShortCutUser('Arthur', 35);
const john = new ShortCutUser('John', 30);
console.log(arthur, john);
//# sourceMappingURL=basics.js.map