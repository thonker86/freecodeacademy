class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }

  // Only change code below this line
  add(element){
    if(!this.has(element)){
        this.dictionary[element] = 0;
        this.length++;
        return true;
    }else{
      return false;
    }
  }

  remove(element){
    if(this.has(element)){
      delete this.dictionary[element];
      this.length--;
      return true;
    }else{
      return false;
    }
  }
  
  size(){
    return this.length;
  }
  // Only change code above this line
}

let mySet = new Set();
mySet.add(4)
mySet.add(5)
mySet.remove(4)
console.log(mySet.values())
console.log(mySet.has(4))