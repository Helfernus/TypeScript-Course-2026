const userName = 'Souradeep';
console.log(typeof name);
type UserName = typeof userName;

const settings = {
  difficulty: 'EASY',
  minLevel: 10,
  didStart: false,
  players: ['Prashansa', 'Souradeep'],
}

// type Settings = {
//   difficulty: 'EASY',
//   minLevel: 10,...
//   // Manual and error prone
// }

type Settings = typeof settings;

function loadData(settings: Settings) {
  // 
}

loadData(settings);

// When determining Functions
function sum(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}
 
type SumFn = typeof sum;
type SubtractFn = typeof subtract;
 
function performMathAction(cb: SumFn | SubtractFn) {
  // some code...
}
