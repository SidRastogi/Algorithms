class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let pre = this.head;
    let temp = pre.next;
    while (pre) {
      pre = temp.next;
      console.log(pre);
    }
  }
}

var list = new SingleLinkList();

list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.pop();

console.log(list);
