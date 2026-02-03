"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileSource = { path: 'some/path/to/file.csv', type: "FILE" };
const dbSource = { connectionUrl: 'some-connection-url', type: "DB" };
function isFile(source) {
    return source.type === 'FILE';
}
function loadData(source) {
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
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        // ...
    }
}
class Admin {
    constructor(permissions) { }
    scan() {
        // ...
    }
}
const user = new User('John');
const admin = new Admin(['ban', 'restore']);
function init(entity) {
    // .join() or .scan()
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
}
//# sourceMappingURL=Guards.js.map