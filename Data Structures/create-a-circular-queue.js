class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    //Only change code below this line
    if(this.queue[this.write] !== null){
      return null;
    }
    this.queue[this.write++] = item
    if(this.write > this.max){
      this.write = 0;
    }
    return item;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if(this.queue[this.read] === null){
        return null;
    }
    let value = this.queue[this.read]
    this.queue[this.read] = null;
    if(this.read >= this.max){
      this.read = 0;
    }else{
      this.read++;
    }
    return value;
    // Only change code above this line
  }
}

let myQue = new CircularQueue(5);
myQue.enqueue(1)
myQue.enqueue(2)
myQue.enqueue(3)
myQue.enqueue(4)
myQue.enqueue(5)
console.log(myQue.dequeue())
myQue.enqueue(6)
console.log(myQue.dequeue())
myQue.enqueue(7)
console.log(myQue.dequeue())
console.log(myQue.dequeue())
console.log(myQue.dequeue())
console.log(myQue.dequeue())
console.log(myQue.dequeue())
console.log(myQue.dequeue())
console.log(myQue.dequeue())
console.log(myQue.print())
