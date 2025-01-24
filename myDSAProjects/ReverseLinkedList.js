//1->10->16->88

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else if (index === 0) {
            return this.prepend(value);
        } else {
            const newNode = new Node(value);
            const leader = this.traverseToIndex(index - 1);
            const holdingPointer = leader.next;
            leader.next = newNode;
            newNode.next = holdingPointer;
            this.length++;
            return this.printList();
        }
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        if (index > this.length) {
            console.log("Invalid Index");
        } else {
            const leader = this.traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            this.length--;
            return this.printList();
        }
    }


    
    reverse() {
        let firstNode = this.head;
        if (!firstNode.next) {
            return this.printList();
        }
        let secondNode = this.head.next;

        while(secondNode) {
            let temp = secondNode.next;
            secondNode.next = firstNode;
            firstNode = secondNode;
            secondNode = temp;
        }

        this.head.next = null;
        this.head = firstNode;
        return this.printList();
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        console.log(this.length);
        return array;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 88);
myLinkedList.reverse(); 
 