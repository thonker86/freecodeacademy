var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = (data)=>{
     if(!data){
      return false;
    }
    let newNode = new Node(data, null);
    if(this.head == null){
      this.head = newNode;
    }else{
      let nextNode = this.head;
      while(nextNode.next){
        nextNode = nextNode.next;
      }
      nextNode.next = newNode;
    }
    if(this.tail == null){
      this.tail = newNode;
    }else{
      let prevNode = this.tail;
      this.tail = newNode;
      this.tail.prev = prevNode
    }
  };
  this.remove = (ele)=>{
    let current = this.head;
    if(!this.head && !this.tail){
      return null;
    }
    if(this.tail.data == ele){      
      let prevNode = this.tail.prev;
      this.tail = prevNode;
      this.tail.next = null;
      return;
    }
    while(current.next){
      if(current.data == ele){
        let removedNode = current;
        let prevNode = current.prev;
        let nextNode = current.next;
        if(this.head.data == removedNode.data){
          this.head = nextNode;
          this.head.prev = null;
          break;
        }
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      }
      current = current.next;
    }
  }
  // Only change code above this line
};

let linkNode = new DoublyLinkedList();
linkNode.add('first')
linkNode.add('second')
//linkNode.add('second')
linkNode.add('third')
//linkNode.add('second')
linkNode.add('forth')
linkNode.remove('forth')
//console.log(linkNode.head.next.next.next)
