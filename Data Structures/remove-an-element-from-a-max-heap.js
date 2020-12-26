var MaxHeap = function() {
  this.heap = [null];
  this.insert = (ele) => {
    var index = this.heap.length;
    var arr = [...this.heap];
    arr.push(ele);
    while (ele > arr[Math.floor(index / 2)] && index > 1) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = ele;
      index = arr[Math.floor(index / 2)];
    }
    this.heap = arr;
  }
  this.print = () => {
    return this.heap.slice(1);
  }
  // Only change code below this line
  this.remove = () =>{
    let arr = [...this.heap];
    let max = arr.splice(1,1);
    this.heap = [null];
    for(let i = 1; i<arr.length;i++){
      this.insert(arr[i])
    }
    return max[0];
  }
  // Only change code above this line
};

let heap = new MaxHeap();
heap.insert(33);
heap.insert(600);
heap.insert(700);
console.log(heap.remove())
console.log(heap.print())