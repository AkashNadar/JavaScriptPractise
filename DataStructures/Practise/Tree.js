class Node {
    constructor(value, parent = null) {
        this.value = value;
        this.parent = parent;
        this.child = [];
    }

    addNode(value) {
        const newNode = new Node(value, this);
        this.child.push(newNode);
        return { node: newNode, index: this.child.length - 1 };
    }

    deleteNode(index) {
        this.child.splice(index, 1);
    }
};

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }
}

const fileSys = new Tree('/');
const firDir = fileSys.root.addNode('/gaming');
const secDir = fileSys.root.addNode('/music');
firDir.node.addNode('AmongUs.exe');
secDir.node.addNode('NF.mp3');
console.log(fileSys.root.child[0].child);