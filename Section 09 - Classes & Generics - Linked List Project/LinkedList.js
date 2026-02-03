"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root; // ? makes it optional so allowing undefined as value
    tail;
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
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
const numberList = new LinkedList();
const names = new LinkedList();
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
//# sourceMappingURL=LinkedList.js.map

console.log(numberList);
