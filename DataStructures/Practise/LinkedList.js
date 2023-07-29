class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
        }

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
        };
        if (!this.tail) {
            this.tail = newNode;
        }
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
    }

    delete(value) {
        if (!this.head) {
            return;
        }

        if (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currNode = this.head;
        while (currNode.next) {
            if (currNode.next.value === value) {
                currNode.next = currNode.next.next;
            }
            else {
                currNode = currNode.next;
            }
        }

        if (this.last && this.last.value === value) {
            this.last = currNode;
        }
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currNode = this.head;
        while (currNode) {
            if (currNode.value === value) {
                console.log('return');
                return currNode;
            }
            currNode = currNode.next;
        }
    }

    insert(value, after) {
        const afterElement = this.find(after);
        if (afterElement) {
            const newNode = {
                value: value,
                next: afterElement.next,
            };
            afterElement.next = newNode;
        }
    }

    toArray() {
        const elements = [];

        let ele = this.head;
        while (ele) {
            elements.push(ele.value);
            ele = ele.next;
        }

        return elements;
    }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.prepend(5);
ll.insert(7, 3);
console.log(ll.toArray());