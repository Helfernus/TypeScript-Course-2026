class User {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

// Shortcut to Create Classes
class ShortCutUser {
  constructor(public name: string, public age: number) {}
}

const arthur = new ShortCutUser('Arthur', 35);
const john = new ShortCutUser('John', 30);

console.log(arthur, john);
