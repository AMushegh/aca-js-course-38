class Queue {
  storage = [];

  enqueue(value) {
    this.storage.unshift(value);
  }

  dequeue() {
    if (this.storage.length) {
      return this.storage.pop();
    } else {
      throw new Error("Queue is empty");
    }
  }

  peek() {
    if (this.storage.length) {
      return this.storage[this.storage.length - 1];
    } else {
      throw new Error("Queue is empty");
    }
  }

  isEmpty() {
    return !this.storage.length;
  }

  print() {
    console.log(this.storage);
  }
}

const queue = new Queue();

queue.print();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue.isEmpty());
console.log(queue.peek());
