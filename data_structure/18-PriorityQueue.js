class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parIndex];
      if (element.priority >= parent.priority) break;
      this.values[index] = parent;
      this.values[parIndex] = element;
      index = parIndex;
    }
    return this;
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap == null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let btree = new PriorityQueue();

btree.enqueue("Common Cold", 6);
btree.enqueue("Fever", 4);
btree.enqueue("GSW", 1);
btree.enqueue("Malaria", 5);
btree.enqueue("Broken ribs", 3);
console.log(btree.dequeue());
console.log("============");
console.log(btree.dequeue());
console.log("============");
console.log(btree.dequeue());
console.log("============");
console.log(btree.dequeue());
console.log("============");
