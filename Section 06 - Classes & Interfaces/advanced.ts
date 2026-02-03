// class User {
//   constructor(private firstName: string, private lastName: string) {

//   };

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// const newUser = new User('John', 'Doe');
// console.log('New User: ', newUser);

class User {
  static eid = 'USER';

  protected _firstName: string = '';
  private _lastName: string = '';

  static greet() {
    console.log('Hello Classy!');
  }

  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid Name!');
    }
    this._firstName = name;
  }
  set lastName(name: string) {
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

class Employee extends User {
  constructor(public jobTitle: string) {
    super(); //Must call base constructor
    super.firstName = 'Juan';

  }

  work() {
    //...
    console.log(this._firstName);
    
  }
}

abstract class UIElement {
  constructor(public identifier: string) {

  }

  clone(targetLocation: string) {
    // logic to duplicate
  }
}

// let uiElement = new UIElement();

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, position: 'left' | 'right') {
    super(identifier);
  }

  // ...
}