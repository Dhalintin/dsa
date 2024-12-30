class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var curr = this.root;
        while (true) {
            if (value === curr.val) return undefined;
            if (value < curr.val) {
                if (curr.left === null) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            } else {
                if (curr.right === null) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }

    search(value) {
        if (this.root === null) return false;
        let curr = this.root;
        while (true) {
            if (curr.val === value) {
                return true;
            }
            if (value < curr.val) {
                if (curr.left === null) return false;
                curr = curr.left;
            } else if (value > curr.val) {
                if (curr.right === null) return false;
                curr = curr.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let curr = this.root;
        let found = false;
        while (curr && !found) {
            if (curr.val === value) {
                found = true;
            } else if (value < curr.val) {
                curr = curr.left;
            } else if (value > curr.val) {
                curr = curr.right;
            }
        }
        if (!found) return undefined;
        return curr;
    }

    /*BFS() {
        const queue = [this.root];
        const visited = [];
        let curr;
        while (queue.length) {
            curr = queue.shift();
            visited.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        return visited;
    }*/

    bfs() {
        const queue = [this.root];
        const visited = [];
        let curr = queue.shift();
        while (queue.length || curr) {
            visited.push(curr.val);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
            curr = queue.shift();
        }
        return visited;
    }

    DFSpreOrder() {
        const visited = [];
        let curr = this.root;
        function traverse(node) {
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(curr);
        return visited;
    }

    DFSpostOrder() {
        const visited = [];
        let curr = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(curr);
        return visited;
    }

    DFSinOrder() {
        const visited = [];
        let curr = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(curr);
        return visited;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// const bfsResult = tree.BFS();
const bfsResult = tree.DFSinOrder();
console.log(bfsResult);
