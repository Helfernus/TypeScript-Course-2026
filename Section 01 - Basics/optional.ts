function generateError(message?: string) {
  throw new Error(message);
}

generateError();
generateError('An error occurred');

type NewUser = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
}

// Nullish Coalescing
let input = '';
// const didProvideInput = input || false; //False
const didProvideInput = input ?? false; //String