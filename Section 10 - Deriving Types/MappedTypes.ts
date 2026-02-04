type Operations = {
  add: (a: number, b: number) => number;
  substract: (a: number, b: number) => number;
};

// A little too related to the Operations
// type Results = {
//   add: number;
//   substract: number;
// };

// Mapped Type with optional mapping
type Results<T> = {
  readonly [Key in keyof T]?: number
};

let mathOperations: Operations = {
  add(a, b) {
    return a + b;
  },

  substract(a, b) {
    return a - b;
  },
}

// let mathResults: Results = {
//   add: mathOperations.add(1, 2),
//   substract: mathOperations.substract(3, 1),
// }

let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 2),
  substract: mathOperations.substract(3, 1),
}

mathResults.add = 10;
console.log(mathResults);
