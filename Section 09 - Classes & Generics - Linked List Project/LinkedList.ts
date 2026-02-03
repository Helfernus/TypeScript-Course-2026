class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) { }
}

class LinkedList<T> {
  private root?: ListNode<T>; // ? makes it optional so allowing undefined as value
  private tail?: ListNode<T>;
  private length: number = 0;

  add(value: T) {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  getNumberOfElements() {
    return this.length;
  }

  print() {
    console.log('Linked List Items: ');

    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const numberList = new LinkedList<number>();
const names = new LinkedList<string>();

numberList.add(123);
numberList.add(321);
numberList.add(54);
numberList.add(12345);
numberList.add(54321);
console.log('Length: ', numberList.getNumberOfElements());
numberList.print();

names.add('Souradeep');
names.add('Prashansa');
names.print();
