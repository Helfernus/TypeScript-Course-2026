type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;
validKey = "age";
validKey = "name";

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const value = obj[key];

  if (value === undefined || value === null) {
    throw new Error('Accessing undefined or null value!');
  }
  return value;
}

const user = { name: 'Juan', age: 23, gender: 'M' };

const hisName = getProp(user, "name");
console.log(hisName);
