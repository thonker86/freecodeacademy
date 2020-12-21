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
    // Only change code below this line
    if(children === 1){
      if(target == this.root){
        this.root = this.root.left ? this.root.left : this.root.right;
      }else{
        if(target == parent.left){
          parent.left = parent.left.left ? parent.left.left : parent.left.right;
        }else{
          parent.right = parent.right.left ? parent.right.left : parent.right.right;
        }
      }
    }
  };
}
let tree = new BinarySearchTree()
tree.add(9);
tree.add(20);
tree.add(5);
tree.add(6)
console.log(tree.root)
console.log(tree.remove(5));
console.log(tree.root)
