function add(a: number, b: number): number {
  return a + b;
}

// Void Type
function log(message: string): void {
  console.log(message);
}

// Never Type
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}


//Functions as Types

function performJob(someCallBackFunction: Function) {
  //...Do something
  someCallBackFunction();
}

function performBetterJob(someCallBackFunction: (m: string) => void) {
  //...Do something
  someCallBackFunction('Job Done!');
}

performBetterJob(log);

type User = {
  name: string;
  age: number;
  greet: (msg: string) => void;
}

let user: User = {
  name:'Juan',
  age: 29,
  greet(msg) {
    console.log('Hello there!', user.name, msg);
  },
}

user.greet('How are you today!');
