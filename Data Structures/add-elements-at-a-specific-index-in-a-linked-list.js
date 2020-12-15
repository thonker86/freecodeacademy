function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  this.addAt = (index, element)=>{
    let currentIndex = 0;
    let currentNode = head;
    let newNode = new Node();
    newNode.element = element;
    if(index < 0 || index > this.size()){
      return false;
    }
    while(currentIndex <= index){
      if(index == 0){
        newNode.next = head;
        head = newNode;
        length++;
        break;
      }
      if(currentIndex == index - 1){
        let nextNode = currentNode.next;
        newNode.next = nextNode;
        currentNode.next = newNode;
        length++;
        break;
      }
      currentNode = currentNode.next
      currentIndex++;
    }
  }
}
let linkedList = new LinkedList();
linkedList.add('Cat');
linkedList.add('Dog');
linkedList.add('Pig');
linkedList.add('Fish');
console.log(linkedList.addAt(0,'S'))
console.log(linkedList.head())