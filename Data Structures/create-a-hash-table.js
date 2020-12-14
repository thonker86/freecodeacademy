var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (k,v)=>{
    let hashed = hash(k)
    if(!this.has(k)){      
      this.collection[hashed] = {};
    }
    this.collection[hashed][k] = v;
  };
  this.remove = (k)=>{
    let hashed = hash(k)
    if(this.has(k)){
      delete this.collection[hashed][k]
      if(Object.keys(this.collection[hashed]).length == 0){
        delete this.collection[hashed]
      }
    }
  };

  this.lookup = k =>{
    let hashed = hash(k)
    if(this.has(k) && this.collection[hashed].hasOwnProperty(k)){
      return this.collection[hashed][k]
    }
  };

  this.has = k =>{
    return this.collection.hasOwnProperty(hash(k))
  }
  // Only change code above this line
};

let myHash = new HashTable();
myHash.add('text',4)
myHash.add('txet', 6)
myHash.add('txt', 2)
myHash.remove('text')
console.log(myHash.lookup('txet'))
console.log(myHash)