//Queue Implementation using LinkedList

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        console.log("First Item: " + this.first.value);
        return this.first.value;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this.printList();
    }
    dequeue() {
        if (!this.first) {
            console.log("Queue is empty");
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next; 
        this.length--;
        return this.printList();
    }

    printList() {
        const array = [];
        let currentNode = this.first;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();

//Joy
//Matt
//Pavel
//Samir