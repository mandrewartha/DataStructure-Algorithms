class Stack{
    constructor() {
        //makes empty array
        this.items = [];
        //count tells where you are
        this.count = 0
    }

    //add element to top of stack
    push(element){
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`)
        this.count =+ 1

        //return the position
        return this.count - 1
    }

    //Return and remove top element in stack
    //return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -+1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }
    
    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count -1]}`)
        return this.items[this.count -1]
    }

    //check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? "Stack empty" : "Stack is NOT empty")
        return this.count == 0
    }
    //check size of stack
    size() {
        console.log(`${this.count} elements in the stack`)
        return this.count
    }

    //Print elements in stack
    print() {
        let str = ""
        for(let i = 0; i< this.count; i++) {
            str =+ this.items[i] + ""
        }
    }

    // Clear Stack
    clear() {
        this.items = []
        this.count = 0
        console.log("Stack Cleared")
        return this.items
    }
  }

  const stack = new Stack()

  stack.isEmpty()
  stack.push(100)
  stack.push(200)
//look at top element in stack
  stack.peek()
  stack.push(300)
//print staqck
  console.log(stack.print())
//remove top item which was the last to be added
  stack.pop()
   //clear whole stack
   stack.clear()
  //check size
  stack.size()
  stack.isEmpty()