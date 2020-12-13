function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.isEmpty = () =>{
      return (collection.length == 0)
  };
  this.pop = ()=>{
    if(!this.isEmpty()){
      return collection.pop()
    }
  }
  this.push = (item)=>{
    collection.push(item)
  }
  this.peek = ()=>{
    if(!this.isEmpty()){
      return collection[collection.length - 1]
    }
  }
  this.clear = ()=>{
    collection = [];
  }
  // Only change code above this line
}

let myStack = new Stack()
myStack.pop()
myStack.push('Book1')
myStack.push('Book2')
myStack.push('Book3')
myStack.print()
console.log(myStack.peek())
console.log(myStack.isEmpty())
myStack.clear()
console.log(myStack.isEmpty())