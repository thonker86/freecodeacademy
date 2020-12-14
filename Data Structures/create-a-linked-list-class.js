function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };
  this.addToLast = (head, newNode)=>{
    if(head.next == null){
        head.next = newNode
      }else{
        this.addToLast(head.next, newNode)
      }
  }
  this.add = function(element){
    // Only change code below this line
    let newNode = new Node(element);
    if(head ==null){
      head = newNode;
    }else{
      this.addToLast(head,newNode)
    }
    length++
    // Only change code above this line
  };
}

let linkedList = new LinkedList();
linkedList.add('Cat');
linkedList.add('Dog');
linkedList.add('Cat');

console.log(linkedList.head())