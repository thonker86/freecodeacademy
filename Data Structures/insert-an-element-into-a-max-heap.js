var MaxHeap = function() {
  this.heap = [null];
  this.getParentIndex = (index)=>{
    return Math.floor(index/2) == 0 ? 1 : Math.floor(index/2);
  };
  this.getLeftIndex = (index)=>{
    return index * 2;
  };
  this.getRightIndex = (index)=>{
    return index * 2 + 1;
  }
  this.insert = (data, index = 1)=>{
    if(this.heap.length == 1){
      return this.heap.push(data)
    }else{
      if(data > this.heap[index]){
        return this.heap.splice(index, 0, data)
      }else{
        let leftIndex = this.getLeftIndex(index);
        let rightIndex = this.getRightIndex(index);
        if(this.heap[leftIndex] === undefined || this.heap[rightIndex] === undefined){
          return this.heap.push(data)
        }else{
          if(!this.insert(data, leftIndex)){
            this.insert(data, rightIndex);
          }
        }
      }
    }
  };
  this.print = ()=>{
    return this.heap
  };
};
