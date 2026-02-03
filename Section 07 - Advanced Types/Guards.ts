type FileSource = { type: 'FILE'; path: string };
const fileSource: FileSource = { path: 'some/path/to/file.csv', type: "FILE" };

type DBSource = { type: 'DB'; connectionUrl: string };
const dbSource: DBSource = { connectionUrl: 'some-connection-url', type: "DB" };

type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type === 'FILE';
}

function loadData(source: Source) {
  if (isFile(source)) {
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => to reach out to the DB

  /*
  // Open + Read File OR reach out to a Database Server
  if('path' in source) {
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => to reach out to the DB
  */
}


class User {
  constructor(public name: string) {}
  join() {
      // ...
    }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('John');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  // .join() or .scan()

  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan();
}
