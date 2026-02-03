let hobbies = ['sports', 'cooking'];

// hobbies.push(10); //Not Allowed

// let users: (string | number)[];
let users: Array<string | number>;

users = [10, "asd"];

//Tuple - Concept

// let possibleResults: number[]; // [1, -1];

//Tuple Type
let possibleResults: [number, number]; // [1, -1];


possibleResults = [1, -1];
// possibleResults = [4, 5, 6, -7]; // ?


let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: 'John',
  age: 39,
  hobbies: ['Guitar'],
  role: {
    description: 'Outlaw',
    id: 1911,
  }
}

let val: {} = 'Text ?';

let data: Record<string, number | string>;
// data = {}; //Works
data = {
  entry1: 1,
  entry2: 'asd',
}
