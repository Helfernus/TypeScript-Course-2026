interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// Different use case to Declaration Merging
interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}

// class AuthenticatableUser implements Authenticatable, ABC1 {}
class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string, //additional data
    public email: string,
    public password: string,
    public role: string
  ) { }
  login() {
    //...
  }
  logout(): void {
    //...
  }
}

// Declaration Merging - This can't be done if we used 'type' instead of 'interface'
// Use cases - 3rd Party Library merge
interface Authenticatable {
  role: string;
}

//Interface as Object Type
let user: Authenticatable;

user = {
  email: 'test@abc.com',
  password: 'Pass12345',
  role: 'author',
  login() {
    // ping DB, check creds, create session
  },
  logout() {
    // clear session
  },
};


function authenticate (user: Authenticatable) {
  user.login();
}