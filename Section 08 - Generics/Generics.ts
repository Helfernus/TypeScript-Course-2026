// Generics - Multiple types need to work together

let names1: Array<string> = ['John', 'Max']; // Generic
let names2: string[] = ['John', 'Max'];

// Generic Type Definition where T is the placeholder
type DataStore<T> = {
  [key: string]: T
};

let store: DataStore<string | number | boolean> = {};
store.name = 'Juan';
store.id = 12;
store.isActive = false;

let nameStore: DataStore<string> = {};
nameStore.name = 'Juan';
// nameStore.id = 12; // Won't work for this store type
