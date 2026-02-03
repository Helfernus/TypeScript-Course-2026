// Predefined list of allowed values
enum Role {
  Admin = 1, // Can also assign Strings
  Editor,
  Guest,
}

// let userRole: Role = 0;
userRole = Role.Admin;
userRole = Role.Guest;

// More popular alternative to ENUM
let role: 'admin' | "editor" | 'guest' = 'guest';
role = "admin";

// Tuple Type Refactor
let newpossibleResults: [1 | -1, -1 | 1];
newpossibleResults = [1, -1];

type NewRole = 'admin' | 'author' | "editor" | 'guest';
let newUserRole: NewRole = "author";
function access(role: NewRole) { }

type User = {
  name: string;
  age: number;
  role: NewRole;
  permissions: string[];
}

let newUser: User = {
  age: 28,
  name: 'Roger',
  role: "admin",
  permissions: ['all',]
}