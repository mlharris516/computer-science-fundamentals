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



var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 100;
  
    this.add = function(key,value) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [key,value]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key,value]);
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };
  
  };
  
  var phoneBook = new HashTable();
  phoneBook.add(888-904-1095,{name:'Meredith', address:'123 4th. St.'})
  phoneBook.add(904-293-5988,{name:'Frankie',address:'999 Mountain Ave.'});
  phoneBook.add(930-594-9820,{name:'Patrick',address:'8394 Fox Dr.'});
  
  console.log(phoneBook.lookup(888-904-1095));
  console.log(phoneBook.lookup(904-293-5988));
  console.log(phoneBook.lookup(930-594-9820));



  var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 100;
  
    this.add = function(key,value) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [key,value]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key,value]);
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };
  
  };
  
  var inventory = new HashTable();
  inventory.add('Khaki Pants', 7);
  inventory.add('Blue Sweatshirts', 18);
  inventory.add('Leather Belts', 9);
  
  console.log(inventory.lookup('Khaki Pants'));
  console.log(inventory.lookup('Blue Sweatshirts'));
  console.log(inventory.lookup('Leather Belts'));


  var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 100;
  
    this.add = function(key,value) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [key,value]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key,value]);
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };
  
  };
  
  var newspaperList = new HashTable();
  newspaperList.add('Blah Times', '1989');
  newspaperList.add('Blues Banter', '1990');
  newspaperList.add('SkyMall Review', '2001');
  
  console.log(newspaperList.lookup('Blah Times', '1989'));
  console.log(newspaperList.lookup('Blues Banter', '1990'));
  console.log(newspaperList.lookup('SkyMall Review', '2001'));



  function hash(key, size){
    var hash = 0;
    for(var i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
    }
  
    return hash % size;
  }
  
  function hashTableByPublisher(){
    var container = [];
    var containerCap = 577;
  
    this.set = function(publisher, date, article){
      var index = hash(publisher, containerCap);
  
      if(container[index] === undefined){
        container[index] = [ [publisher, date, article] ];
      }
    };
  
    this.get = function(publisher){
      var index = hash(publisher, containerCap);
  
      if(container[index] === undefined) {
          return "The publisher list is empty";
      } else {
          for(var i = 0; i < container[index].length; i++) {
            if(container[index][i][0] === publisher) {
                return "Publisher: " + container[index][i][0] + ", date published: " + container[index][i][1] + ", article: " + container[index][i][2];
            } else {
              return "publisher not found";
            }
          }
      } 
    };
  }
  
  function hashTableByDate(){
    var container = [];
    var containerCap = 577;
  
    this.set = function(publisher, date, article){
      var index = hash(date, containerCap);
  
      if(container[index] === undefined){
        container[index] = [ [publisher, date, article] ];
      }
    };
  
    this.get = function(date){
      var index = hash(date, containerCap);
  
      if(container[index] === undefined) {
          return "The newspaper list is empty";
      } else {
          for(var i = 0; i < container[index].length; i++) {
            if(container[index][i][1] === date) {
                return "Publisher: " + container[index][i][0] + ", date published: " + container[index][i][1] + ", article: " + container[index][i][2];
            } else {
              return "date not found";
            }
          }
      } 
    };
  }
  
  var article = new hashTableByPublisher();
  var articleDate = new hashTableByDate();
  
  article.set("Blah Times", "1989", "blahblahblah");
  article.set("Blues Banter", "1990", "blues blues blues");
  article.set('SkyMall Review', '2001', "great pizza shaped tie");
  
  articleDate.set("Blah Times", "1989", "blahblahblah");
  articleDate.set("Blues Banter", "1990", "blues blues blues");
  articleDate.set('SkyMall Review', '2001', "great pizza shaped tie");
  
  console.log(article.get("Blah Times"));
  console.log(articleDate.get("2001"));
  console.log(article.get("Text Article"));
  console.log(articleDate.get("2019"));