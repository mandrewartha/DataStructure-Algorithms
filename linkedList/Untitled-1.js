//linked list
// nested objects that basically link to each other

 //create single list class
 class LinkedList {
    //create initual value
   constructor(value) {
       this.head = null;
       this.length = 0;
       this.addToHead(value);
   }
   
   //same as push, add to front
   addToHead(value) {
       const newNode = { value }; // 1 pass value into head
       newNode.next = this.head;  // 2 adding a key value pair to a new node object
       this.head = newNode;       // 3 passing the object with the value inside. changing value from null to the object
       this.length++;
       return this;               // 4 returning the whole thing
   }

   //remove from beginning. takes off the first value no matter what it is
   removeFromHead() {
       if (this.length === 0) {
           return undefined;
       }
           
       const value = this.head.value;    // 1. create value variable for the first head in the list
       this.head = this.head.next;       // 2. taking the head and replacing it with what was the next value
       this.length--;                    // 3. subtracting from the length
    
       return this;                     // 4. replacing the first value in the list with what was the second value in the new list
   }

   find(val) {
       let thisNode = this.head;        // 1. creating a variable for the object
    
       while(thisNode) {               
           if(thisNode.value === val) {    // 2. If the value you pass in is equal to the value of the head object 
               return thisNode;            // 3. If the value put in matches the value of the head of a node then return the object
           }
               
           thisNode = thisNode.next;       // 4. If it doesn't hit that if statement then changing the object to be the next object. 
                                                   //telling it to move on to the next
       }
        
       return thisNode;                    // 5. return whatever node matched the value
   };

   remove(val) {                       // will pick out and remove any value
       if(this.length === 0) {        
           return undefined;
       }
       
       if (this.head.value === val) {      // 1. if beginning value is equal to the value looking for, use previosu remove from head  method
           return this.removeFromHead();
       }
       
       let previousNode = this.head;       // 2. creating variable for previous node if the if statement doesnt run.
       let thisNode = previousNode.next;   // 3. current node looking at is the next node
       
       while(thisNode) {                   // 4. looping through all the nodes to check if the value equals value looking for
           if(thisNode.value === val) {
               break;                      // if the value is equal, break out of if statement
           }
           
           previousNode = thisNode;        // 5. getting rid of the previous node by replacing the value
           thisNode = thisNode.next;       // 6. moving current node to the next value
       }
       
       if (thisNode === null) {            // 7. outside the while loop. if the loop ends and doesnt find value, return undefined
           return undefined;
       }
       
       previousNode.next = thisNode.next;   // 8. continuing to replace the old removed value with ther current value
       this.length--;                       // 9. removing one from length
       return this;
   }
}

const list = new LinkedList('first')
//inside the class use function so use the period
   .addToHead('second')
   .addToHead('third')
   .remove("second")
   .find("third")
   

console.log(list)