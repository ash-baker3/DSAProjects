
//Stack Implementation using LinkedList
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
    //display top element
    console.log("Top element: " + this.top);
    return this.top;
    }

    push(value) {
    //push to the top
    const newNode = new Node(value);
    if(this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;

    } else {
        const oldTop = this.top;
        this.top = newNode;
        this.top.next = oldTop;
    }
    this.length++;
    return this.printList();
    }

    pop() {
    //pop from the top
    if(!this.top) {
    console.log("Stack is empty");
    return null;
    } 
    if(this.top === this.bottom) {
        this.bottom = null;
    } 

    this.top = this.top.next;
    this.length--;
    return this.printList();
    }

    isEmpty() {
        //to check if stack is empty or not
        return this.length === 0;
    }

    printList() {
        const array = [];
        let currentNode = this.top;
        while (currentNode != null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
        }
        console.log(array);
        return array;
      }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
myStack.pop();
myStack.pop();



//Discord
//Udemy
//Google