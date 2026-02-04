type StringArray = string[];
// type ElementType = StringArray[number];

// type ElementType<T extends any[]> = T[number];
// type Example1 = ElementType<StringArray>

type GetElementType<T> = T extends any[] ? T[number] : never; //Utility TYpe

type Example1 = GetElementType<StringArray>;

let text = 1;
type Example2 = GetElementType<typeof text>;

type FullNamePerson = { firstName: string; lastName: string };
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
  if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
  }
  throw new Error('No first name and / or last name found.')
}

// const name1 = getFullName({});
const name2 = getFullName({firstName: 'John', lastName: 'Doe'});
console.log(name2);
