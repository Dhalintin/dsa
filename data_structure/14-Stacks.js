class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class stack {
    constrcutor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop() {
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
