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

  this.remove = function(element){
    // Only change code below this line
    let loopNode = head;
    while(loopNode.next){
      if(head.element == element){
        head = head.next;
        length--;
        break;
      }
      if((loopNode.next).element == element){
        loopNode.next = (loopNode.next).next
        length--;
        break;
      }
      loopNode = loopNode.next;
    }
    //console.log(loopNode.element)
    // Only change code above this line
  };
}

let linkedList = new LinkedList();
linkedList.add('Cat');
linkedList.add('Dog');
linkedList.add('Pig');
linkedList.add('Fish');
console.log(linkedList.size())
console.log(linkedList.head())
linkedList.remove('Fish')
console.log(linkedList.size())
console.log(linkedList.head())