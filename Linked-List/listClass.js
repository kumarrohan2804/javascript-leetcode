class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
    return;
  }
  traverse() {
    let curr = this.head;
    var str = "";
    while (curr.next !== null) {
      str += " " + curr.data;
      curr = curr.next;
    }
    str += " " + curr.data;
    console.log("The entire Linked List is ", str);
  }
}

let ll = new LinkedList();
ll.insert(2);
ll.insert(4);
ll.insert(6);
ll.insert(8);
ll.traverse();
