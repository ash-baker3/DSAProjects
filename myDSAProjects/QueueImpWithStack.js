//Queue Implementation using Stack

class Queue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this.printList();
    }

    dequeue() {
        const length = this.last.length;
        for(let i =0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this.printList();
    }

    peek() {
        if (this.first.length > 0) {
            console.log("First Item: " + this.first[this.first.length - 1]);
            return this.first[this.first.length - 1];
        }
        console.log("First Item: " + this.last[0]);
        return this.last[0];
    }

    printList() {
        const queue = [];
        for (let i = this.first.length - 1; i >= 0; i--) {
            queue.push(this.first[i]);
        }
        for (let i = 0; i < this.last.length; i++) {
            queue.push(this.last[i]);
        }
        console.log(queue);
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
myQueue.enqueue("Joel");

//Joy
//Matt
//Pavel
//Samir