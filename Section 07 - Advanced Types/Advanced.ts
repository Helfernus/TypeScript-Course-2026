// Index Types
type DataStore = {
  [prop: string]: number | boolean; // [placeholder_with_any_name] i.e. placeholder for a dynamic property [:value type of property name]
}

// Record Types
let someObject: Record<string, number | boolean> = {}; // Same as DataStore Index Type

someObject.id = 5;
// someObject.name = 'John';


let store: DataStore = {};

store.id = 5;
store.isOpen = false;
// store.name = 'John';


let roles = ['admin', 'author', 'editor', 'guest'] as const; // Infer type narrowly

// roles.push('big dawg'); // Won't work now
const firstRole = roles[0];

const dataEntries: Record<string, number> = {
  entry1: 0.51,
  entry2: -1.23,
};

dataEntries.entryN // valid


const dataEntriesSatisfies = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

// dataEntriesSatisfies.entryN // Invalid Now
// Type Safety with Flexibility so that TS can first determine if the values work with the Type and then choose the more specific definition
