function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
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
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.indexOf = (el)=>{
    let index = 0;
    let found = false;
    let currentNode = head;
    while(currentNode.next){
      if(currentNode.element == el){
        found = true;
        break;
      }
      index++;
      currentNode = currentNode.next;
    }
    return found ? index : -1;
  }

  this.elementAt = (index)=>{
    let currentNode = head;
    let found;
    let count = 0;
    while(count <= index && index < this.size()){
      if(count == index){
        found = currentNode.element;
      }
      count++;
      currentNode = currentNode.next;
    }
    return found ? found : undefined;
  }
  this.isEmpty = ()=>{
    return !Boolean(this.size());
  }
  // Only change code above this line
}
let linkedList = new LinkedList();
console.log(linkedList.isEmpty())
linkedList.add('Cat');
linkedList.add('Dog');
linkedList.add('Pig');
linkedList.add('Fish');
console.log(linkedList.indexOf('Pig'))
console.log(linkedList.elementAt(4))
console.log(linkedList.head())