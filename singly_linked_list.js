///[Node] defines one single entity in a linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(newNode) {
    let val = new Node(newNode);
    if (!this.head) {
      this.head = val;
      this.tail = val;
    } else {
      this.tail.next = val;
      this.tail = val;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let last = this.head;
    while (current.next) {
      if (current.next == this.tail) {
        last = current;
      }
      current = current.next;
    }
    this.tail = last;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;
    let val = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return val;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.tail = newHead;
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length += 1;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("You");
list.push("are");
list.push("so");
list.push("beautiful");

console.log(list.unshift("NSKANks"));
