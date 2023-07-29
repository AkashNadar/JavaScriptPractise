class Node {

    constructor(value, parent = null) {
        this.value = value
        this.child = [];
        this.parent = parent;
    };

    addNode(path) {
        const elements = path.split('/');

        if (elements.length === 0)
            return;

        if (elements.length === 1) {
            const newNode = new Node(elements[0], this);
            this.child.push(newNode);
            return { node: newNode, index: this.child.length - 1 };
        };

        const chileNodeExist = this.child.find(ele => ele.value === elements[0]);
        if (chileNodeExist) {
            chileNodeExist.addNode(elements.slice(1).join('/'));
        }
        else {
            const newNode = new Node(elements[0], this);
            newNode.addNode(elements.slice(1).join('/'));
            this.child.push(newNode);
            return { node: newNode, index: this.child.length - 1 };
        }

    }

    removeNode(path) {
        const elements = path.split('/');

        if (elements.length === 0) {
            return;
        }

        if (elements.length === 1) {
            const eleIndex = this.child.findIndex(ele => ele.value === elements[0]);
            if (eleIndex === -1) {
                throw new Error('Not found :(')
            }
            else {
                this.child.splice(eleIndex, 1);
            }
        }

        if (elements.length > 1) {
            console.log("inside");
            const eleExist = this.child.find(ele => ele.value === elements[0]);
            if (!eleExist) {
                throw new Error("Not found");
            }

            eleExist.removeNode(elements.slice(1).join('/'))

        }
    }
}

class Tree {

    constructor(value) {
        this.root = new Node(value);
    }

    add(path) {
        this.root.addNode(path);
    }

    remove(path) {
        this.root.removeNode(path);
    }
}

const newTree = new Tree('/');
newTree.add('down/js.pdf');
newTree.add('down/kes.mp3');
newTree.add('doc/front.html');
newTree.add('doc/back.js');
newTree.remove('doc/back.js');
console.log(newTree.root.child[1]);
