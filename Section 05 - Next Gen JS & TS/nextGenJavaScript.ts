// Rest

const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  });
}

const addedNumbers = add(1, 2, 3, 4, 5, 6);
console.log(addedNumbers);