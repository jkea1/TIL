class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  remove(value) {
    let prevNode = this.head;
    if(prevNode.value === value) {
      prevNode = this.head;
    } else {
      while(prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }
    }
    console.log(prevNode);
    if(prevNode === this.head) {
      console.log(1);
      this.head = prevNode.next;
      prevNode.next = null;
    } else if (prevNode.next === this.tail) {
      console.log(3);
      this.tail = prevNode;
      prevNode.next = null;
    } else {
      console.log(2);
      prevNode.next = prevNode.next.next;
    }
    
  }

}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.remove(2);
console.log(linkedList);

