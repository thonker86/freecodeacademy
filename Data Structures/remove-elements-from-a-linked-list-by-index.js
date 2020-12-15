function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.removeAt = (index)=>{
    let currentIndex = 0;
    let currentNode = head;
    let removedNode;
    if(index < 0 || index >= this.size()){
      return null;
    }
    while(currentIndex <= index){
      if(index == 0){
        removedNode = head.element;
        head = head.next;
        length--;
        break;
      }
      if(currentIndex == index - 1){
        removedNode = (currentNode.next).element;
        currentNode.next = (currentNode.next).next;
        length--;
        break;
      }
      currentIndex++;
      currentNode = currentNode.next;
    }
    return removedNode;
  }
}
let linkedList = new LinkedList();
linkedList.add('Cat');
// linkedList.add('Dog');
// linkedList.add('Pig');
// linkedList.add('Fish');
// linkedList.add('Fishes');
console.log(linkedList.removeAt(0))
console.log(linkedList.size())
console.log(linkedList.head())