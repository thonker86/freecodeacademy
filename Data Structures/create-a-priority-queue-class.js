function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = (item)=>{
    this.collection  = this.collection.reverse()
    let index = this.collection.findIndex(el=>item[1]>=el[1]);
    //console.log(index)
    if(index == -1){
      this.collection.push(item);
    }else{
      this.collection.splice(index,0,item);
    }
    this.collection  = this.collection.reverse()
  };  
  this.dequeue = ()=>{
    return this.collection.shift()[0];
  }
  this.isEmpty = ()=>{
    return !this.collection.length
  }
  this.front = ()=>{
    return this.collection[0][0];
  };
  this.size = ()=>{
    return this.collection.length;
  }
  // Only change code above this line
}

let myQue = new PriorityQueue();
console.log(myQue.isEmpty())
myQue.enqueue(['mohammed', 1])
myQue.enqueue(['mohammed', 2])
myQue.enqueue(['mohammed', 3])
myQue.enqueue(['ahmed', 2])
myQue.enqueue(['salem', 3])
myQue.enqueue(['mohammed2', 3])
myQue.enqueue(['mohammed2', 1])
//console.log(myQue.dequeue())
console.log(myQue.isEmpty())
console.log(myQue.front())
myQue.printCollection()