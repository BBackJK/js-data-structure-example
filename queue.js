// 배열을 이용하여 큐 구현
class Queue {
  constructor() {
    this.dataStore = [];
  }

  toString() {
    let result = "";
    for (let val of this.dataStore) {
      result = result + val + "\n";
    }
    return result;
  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    return this.dataStore.shift();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  empty() {
    if (this.dataStore.length === 0) {
      return true;
    }
    return false;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.toString());
queue.dequeue(); // 가장 먼저 들어간 1이 삭제
queue.dequeue(); // 그 다음 먼저 들어간 2가 삭제
console.log(queue.toString());
