// Plain JS Template Literal
const mainUserName = 'Arthur';

const greeting = `Hi there, ${mainUserName}.`;

// Literal Types
type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

//What we want to have
// type FilePermissions = 'no-read-no-write' | 'no-read-write' | 'read-no-write' | 'read-write';
type FilePermissions = `${ReadPermissions}-${WritePermissions}`; //Template Literal Type

type DataFile = {
  data: string;
  permissions: FilePermissions;
}

type DataFileEventNames = `${keyof DataFile}Changed`; //Template Literal Type

type DataFileEvents = {
  [Key in DataFileEventNames]: () => void;
}