class User<T> {
  constructor(public id: T) { }
}

const user = new User('i1');
user.id;

interface Role<T> {

}
