
//Stack Implementation using Array

class Stack {
    constructor() {
        this.newArray = []
    }

    peek() {
        //display top element
        const topElement = this.newArray[this.newArray.length - 1];
        console.log("Top element: " + topElement);
        return topElement;
    }

    push(value) {
        //push to the top
        this.newArray.push(value);
        console.log(this.newArray);
        return this.newArray;
    }

    pop() {
        //pop from the top
        this.newArray.pop();
        console.log(this.newArray);
        return this.newArray;
    }

    isEmpty() {
        //to check if stack is empty or not
        return this.newArray.length === 0;
    }

}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();




//Discord
//Udemy
//Google