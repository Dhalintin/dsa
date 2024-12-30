class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        const removedNode = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }

        this.length--;
        return removedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        // If its a valid index
        if (index < 0 || index >= this.length) return null;
        var counter;
        var curr;

        if (index <= this.length / 2) {
            curr = this.head;
            counter = 0;
            while (counter < index) {
                curr = curr.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            curr = this.tail;
            while (counter > index) {
                curr = curr.prev;
                counter--;
            }
        }

        return curr;
    }

    set(index, val) {
        const node = this.get(index);
        if (node === null) return false;
        node.val = val;

        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const foundNode = this.get(index - 1);
        const newNode = new Node(val);
        newNode.prev = foundNode;
        newNode.next = foundNode.next;
        foundNode.next.prev = newNode;
        foundNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        const removedNode = this.get(index);
        const prev = removedNode.prev;
        const next = removedNode.next;

        prev.next = next;
        next.prev = prev;

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
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

const list = new DoublyLinkedList();

list.push(60);
list.push(50);
list.push(40);
list.push(30);
list.push(20);
list.push(10);

// const removed = list.pop();
// console.log(removed);
// const unshifted = list.unshift(67);
// console.log(unshifted);
// console.log(list.get(2));
console.log(list.print());
console.log(list.remove(1));
console.log(list.print());
