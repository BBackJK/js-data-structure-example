class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  // 조회
  find(item) {
    let currentNode = this.head;

    while (currentNode.element != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 삽입
  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);

    newNode.next = current.next;
    current.next = newNode;
  }

  // 디스플레이? (콘솔 찍는거)
  display() {
    let currentNode = this.head;

    while (!(currentNode.next === null)) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }

  // 이전 값 조회
  findPrevious(item) {
    let currentNode = this.head;

    while (!(currentNode.next === null) && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 삭제
  remove(item) {
    let previousNode = this.findPrevious(item);
    if (!(previousNode.next === null)) {
      previousNode.next = previousNode.next.next;
    }
  }
}

const ll = new LinkedList();

ll.insert("Seoul", "head");
ll.display();
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
ll.insert("Busan", "Seoul");
ll.display();
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
ll.insert("Daegu", "Seoul");
ll.display();
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
ll.insert("Incheon", "Busan");
ll.display();
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
ll.remove("Busan");
ll.display();
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
