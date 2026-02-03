console.log('Hello World!');

let userName: string;
let userAge = 30;

//...

userName = 'John';

function add(a: number, b = 3) {
  return a + b;
}

add(10);
// add('10');
// add(2, 'two');


let age: any = 123;

age = '124';
age = [];

let x: number | string = 100;
x = '1';
// x = {}; //Not allowed