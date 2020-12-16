var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.reverse = ()=>{
    if(!this.tail || !this.head){
      return null
    }
    let reverse = null;
    let current = this.tail;
    while(current.prev){
      let node = new Node(current.data, null);
      if(reverse == null){
        reverse = node;
      }else{        
        let reverseList = reverse;
        while(reverseList.next){
          reverseList = reverseList.next;
        }
        node.prev = reverseList;
        reverseList.next = node;
      }
      current = current.prev;
    }
    //add the tail
    let last = reverse;
    while(last.next){
      last = last.next
    }
    let lastnode = new Node(this.head.data, last);
    last.next = lastnode
    this.tail = lastnode;
    this.head = reverse;
  }
};