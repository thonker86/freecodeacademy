var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.add = (value, root = this.root)=>{
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
    }else{
      if(value == root.value){
        return null;
      }else if(value < root.value){
        if(!root.left){
          root.left = newNode;
        }else{
          return this.add(value, root.left);
        }
      }else{
        if(!root.right){
          root.right = newNode;
        }else{
          return this.add(value, root.right);
        }
      }
    }
  }
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // Find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // Case 2: Target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // Case 3: Target has two children
    // Only change code below this line
    else if(children == 2){
      this.findReplacement = (type, root = targe, value = null)=>{
        if(root){
          if(value == null) value = root;
          if(type == 'small'){
            if(value.value > root.value) value = root;
          }else{
            if(value.value < root.value) value = root;
          }
        }
        if(root.left) value = this.findReplacement(type, root.left,value);
        if(root.right) value = this.findReplacement(type, root.right,value);
        return value;
      }
      if(parent == null || value == parent.right.value){
        let replacement = this.findReplacement('small',target.right);
        this.remove(replacement.value);
        target.value = replacement.value;
      }else{
        let replacement = this.findReplacement('large',target.left);
        this.remove(replacement.value);
        target.value = replacement.value;
      } 
    }
  };
}

let tree = new BinarySearchTree()
tree.add(9);
tree.add(20);
tree.add(22);
tree.add(19);
tree.add(18);
tree.add(10);
//tree.add(25)
tree.add(5);
tree.add(6);
tree.add(4);
tree.add(3);
tree.add(2);
//console.log(tree.root.right);
tree.remove(9);
console.log(tree.root)