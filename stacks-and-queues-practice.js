// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
}

//Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}

//Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
    //Check to see if the stack is empty
    if (this.count === 0) {
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

//returns the length of the stack 
Stack.prototype.size = function() {
    return this.count;
}




/* Stacks! */
// functions: push(placing data on top of a stack), pop(remove top element of a stack), peek(display top element of stack), length(tells you how many elements are in a stack)

//stack as an array to find palindromes

//the stack, as an empty array
var letters = []; 

var word = "racecar"

//use stack to fill up variable with reversed word
var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}
}

//as a stack

var Stack = function() {
    this.count = 0; // keeps track of how many items are in the stack
    this.storage = {}; // empty object

    // adds a value onto the end of the stack
    this.push = function(value) { //only pass in a value when adding something to stack
        this.storage[this.count] = value; // at index [this.count] we are adding a new value to the top/end of the stack 
        this.count++; // increment by one
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() { // pop an item off
        if (this.count === 0) {
            return undefined;
        }

        this.count--; //decrement the count by one
        var result = this.storage[this.count]; //go to the stack at the index of this.count which is the top of the stack
        delete this.storage[this.count]; //remove the top item, pop it off
        return result; //return the item that was deleted
    }

    //returns size of stack
    this.size = function() {
        return this.count;
    }

    // Returns the value at the end of the stack but wont remove it
    this.peek = function() {
        return this.storage[this.count-1]; //minus one to get the last item
    }
}

//new stack
var myStack = new Stack();

myStack.push(1);
myStack.push(2); //should just be a stack with 2 items
console.log(myStack.peek()); // show 2
console.log(myStack.pop()); // remove 1
console.log(myStack.peek()); // show 1
 



//stack from seth koch video

var Stack = function() {
    this.storage = {};
    this.size = 0;
}

var maple = new Stack();
