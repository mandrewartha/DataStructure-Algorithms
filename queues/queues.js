//queues

class Node {
    constructor(value) {
        //store internally
        this.value = value;
        //each node points to another node
        this.next = null
    }
}

class Queue {
    constructor() {
        //pointer to front and back of queue
        this.front = null;
        this.back = null;
    }

    //checks if q is empty
    isEmpty() {
        //empty if this.front is null. return if not null
        return !this.front
    }
    //push into queue
    enqueue(value) {
        //1. create new node with value
        let node = new Node(value)
        //2. check if queue is empty
        if (this.isEmpty()) {
            // 3. if empty point front and back to new node   
            this.front = this.back = node;

        } 
        // 4. else, the queue is not empty 
        else {
            //5. push node to back of the queue by pointing last node to new node. creating new last element
            this.back.next = node
            //6. move back pointer to new node
            this.back = node
        }
        this.print()
    }
    //view queue
    print() {
        //if queue empty
        if (this.isEmpty()) {
            console.log("EMPTY QUEUE")
        } else {
            //else not empty
            //create temp array
            let tempArr = []
            //temp variable to front of queue
            let tempVar = this.front
            //iterate through queue. while will only run when there are values
            while (tempVar) {
                //add value into temp array
                tempArr.push(tempVar.value)
                // move to next elements 
                tempVar = tempVar.next
            }
            // print the values   
            console.log(tempArr.join(","))
        }

    }
    //remove from queue in order inserted
    dequeue() {
        //pointer to front of q
        let node = this.front
        // is q not empty?
        if (!this.isEmpty()) {
            //move front to next element
            this.front = this.front.next

        }
        //check if front is null because if it is only element it will be null
        if (!this.front) {
            // set back to null for empty q
            this.back = null
        }
        //print q
        this.print()
        //return node to front of q
        return node
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
// will print, 1, 2, 3
q.dequeue()
// will print 2, 3