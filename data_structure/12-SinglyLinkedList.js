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

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let current = this.head;
        let previous = current;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let nodeAtIndex = this.head;
        while (count < index) {
            nodeAtIndex = nodeAtIndex.next;
            count++;
        }
        return nodeAtIndex;
    }

    set(index, val) {
        const foundNode = this.get(index);
        if (!foundNode) return false;
        foundNode.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return this;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new SinglyLinkedList();
list.push(90);
list.push(80);
list.push(70);
list.push(60);
list.push(50);

console.log(list.print());
list.reverse();
console.log(list.print());
