function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = (item)=>{
    collection.push(item);
  };
  this.dequeue = ()=>{
    if(!this.isEmpty())
      return collection.shift();
  };
  this.front = ()=>{
    if(!this.isEmpty())
      return collection[0];
  };
  this.isEmpty = ()=>{
    return !this.size();
  }
  this.size = ()=>{
    return collection.length;
  };
  // Only change code above this line
}

let myQue = new Queue()
console.log(myQue.isEmpty())
console.log(myQue.size())
myQue.enqueue('process1')
myQue.enqueue('process2')
myQue.enqueue('process3')
console.log(myQue.size())
console.log(myQue.dequeue())
console.log(myQue.size())
myQue.print()
console.log(myQue.isEmpty())
