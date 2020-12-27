var MaxHeap = function() {
  this.heap = [null];
  this.insert = (data)=>{
      this.heap.push(data);
      let heap = this.heap;
      (function maxHeap(index){
        if(data > heap[Math.floor(index/2)] & index > 1){
          [heap[index], heap[Math.floor(index/2)]] = [heap[Math.floor(index/2)], data]
          maxHeap(Math.floor(index/2))
        }
      })(this.heap.length-1)
  };
  this.print = ()=>{
    return this.heap;
  }
};