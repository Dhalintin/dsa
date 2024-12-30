class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constrcutor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) return null;
        const removedNode = this.first;
        if (this.last === this.first) {
            this.last = null;
        }
        this.first = this.first.next;

        this.size--;
        return removedNode.val;
    }
}
