function logger<T extends new (...args: any[]) => any>(target: T, context: ClassDecoratorContext) {
  console.log('Target:', target);
  console.log('Context:', context);

  return class extends target {
    // age = 35;
    constructor(...args: any[]) {
      super(...args);
      console.log('Class Constructor');
      console.log('This Class:', this);

    }
  }
}

// function autobind(target: Function) {}
// Same as below
function autobind(target: (...args: any[]) => any, context: ClassMethodDecoratorContext) {
  // console.log('Method Target:', target);
  // console.log('Method Context:', context);
  context.addInitializer(function (this: any) {
    this[context.name] = this[context.name].bind(this);
  });

  return function (this: any) {
    console.log('Executing original function');
    target.apply(this);
  }
}

function replacer<T>(initValue: T) {
  return function replacerDecorator(target: undefined, context: ClassFieldDecoratorContext) {
    console.log('Field Target:', target);
    console.log('Field Context:', context);

    return (initialValue: any) => {
      console.log('Initial Field Value:', initialValue);
      return initValue;
    }
  }
}

@logger
class Person {

  @replacer('Mark')
  name = 'John'

  // JS way to solve the "this" problem
  // constructor() {
  //   this.greet = this.greet.bind(this);
  // }

  @autobind
  greet() {
    console.log(`Hi! I am ${this.name}. Nice to meet you!`);
  }
}

const john = new Person();
// const mark = new Person();

const pointedGreet = john.greet;
pointedGreet();
