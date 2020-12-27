function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  this.heap = [null];
  this.insert = (data)=>{
    var index = this.heap.length;
    var arr = [...this.heap];
    arr.push(data);
    while (data < arr[Math.floor(index / 2)] && index > 1) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = data;
      index = Math.floor(index / 2);
    }
    this.heap = arr;
  };
  this.print = ()=>{
    let arr = [...this.heap]
    arr.shift()
    return arr;
  };
  this.remove = ()=>{
    let arr = [...this.heap];
    let min = arr.splice(1,1);
    this.heap = [null];
    for(let i = 1; i<arr.length;i++){
      this.insert(arr[i]);
    }
    return min[0];
  }
  this.sort = ()=>{
    return this.print().sort((a,b)=> a-b)
  }
};