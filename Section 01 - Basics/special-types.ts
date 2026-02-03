let a: null | string;

a = 'Hi';
a = null; // Used when we'd like to clear a string

// Type Narrowing
const inputEl = document.getElementById('user-name');

if (!inputEl) {
  throw new Error('Element not found!');
}

// TypeScript is Smart and understands inputEl past the if check cannot be null anymore.
console.log(inputEl.value);


// Forcing Not Null to TypeScript
const inputEl2 = document.getElementById('user-name')!;

// if (!inputEl2) {
//   throw new Error('Element not found!');
// }

// TypeScript is Smart and understands inputEl past the if check cannot be null anymore.
// console.log(inputEl2?.value); //Inline Null Check and proceed after ? if NOT NULL

// Type Casting / Type Assertion
const inputEl3 = document.getElementById('user-name') as HTMLInputElement | null;
console.log(inputEl3?.value);
