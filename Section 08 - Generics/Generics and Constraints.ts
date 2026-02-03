// T i.e. Placeholders are Parameters for the Generic Type
function mergeObject<T extends object, U extends object>(paramA: T, paramB: U) { // Constraint by adding extends
  return { ...paramA, ...paramB };
}

const merged = mergeObject({ firstName: 'Souradeep', lastName: 'Mukherjee' }, { age: 28 });
console.log(merged);

