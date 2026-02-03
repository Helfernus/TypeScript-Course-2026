"use strict";
// class User {
//   constructor(private firstName: string, private lastName: string) {
Object.defineProperty(exports, "__esModule", { value: true });
//   };
//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
// const newUser = new User('John', 'Doe');
// console.log('New User: ', newUser);
class User {
    static eid = 'USER';
    _firstName = '';
    _lastName = '';
    static greet() {
        console.log('Hello Classy!');
    }
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid Name!');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid Name!');
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
}
console.log(User.eid);
User.greet();
const newUser = new User();
newUser.firstName = 'John';
newUser.lastName = 'Doe';
console.log('New User: ', newUser);
//# sourceMappingURL=advanced.js.map