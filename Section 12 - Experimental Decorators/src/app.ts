function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log('Target:', constructor);
  }
}

function withTemplate(template: string, hookId: string) {
  console.log('Template Factory');
  return function <T extends { new(...args: any[]): { name: string } }>(OriginalConstructor: T) {
    console.log('Rendering Template');

    return class extends OriginalConstructor {
      constructor(..._: any[]) {
        super();
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

// @Logger('LOGGING - PERSON')
@withTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'John';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator');
  console.log('Target:', target);
  console.log('Property Name:', propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator!');
  console.log('Target:', target);
  console.log('Name:', name);
  console.log('Descriptor:', descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method Decorator!');
  console.log('Target:', target);
  console.log('Name:', name);
  console.log('Descriptor:', descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator!');
  console.log('Target:', target);
  console.log('Name:', name);
  console.log('Position:', position);
}

class Product {

  @Log
  title: string;
  _price: number;

  @Log2 //Could return something and TS would use it i.e methods and accessors
  setPrice(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3 //Could return something and TS would use it  i.e methods and accessors | return on properties and params are ignored
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 20);

function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    }
  }
  return adjustedDescriptor;
}

class Printer {
  message = 'This works!'

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));
button.addEventListener('click', p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[] // required, positive
  }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
  }
  console.log('Registered Validators from Required:', registeredValidators);
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
  }
  console.log('Registered Validators from Positive:', registeredValidators);
}

function validate(obj: any): Boolean {
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objectValidatorConfig) {
    console.log('Prop:', prop);

    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;


  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleElement = document.getElementById('title') as HTMLInputElement;
  const priceElement = document.getElementById('price') as HTMLInputElement;
  const title = titleElement.value;
  const price = +priceElement.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid Input, please try again!');
    return;
  }
  console.log('Created Course:', createdCourse);
});
