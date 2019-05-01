class Stack {
    constructor() {
        this.pop = function(queue){
            var newQueue = [];
            var itemToDelete = [];

            for (var i = 0; i < queue.length; i++); {
                if(i == queue.length - 1) {
                    itemToDelete.push(queue[1]);
                } else {
                    newQueue.push(queue[i]);
                }
            }
            return itemToDelete;
        } 
    }
}

var stack = new Stack();
console.log(stack.pop("New Item"));