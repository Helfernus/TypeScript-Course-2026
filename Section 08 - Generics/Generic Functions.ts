// Not Generic Function
function merge(a:any, b:any) {
  return [a, b];
}

// Concrete type information is lost when we set params to any
const ids = merge(1, 2);

const id1 = ids[0];

// Generic Functions
function mergeGeneric<T>(a: T, b: T) {
  return [a,b];
}

// const newIds = mergeGeneric<number>(1, 3); // TS can automatically infer
const newIds = mergeGeneric(1, 3);


// Multiple Generic Types
function remerge<T, U> (a:T, b: U) {
  return [a, b];
}

const renewIds = remerge(1, '3');
