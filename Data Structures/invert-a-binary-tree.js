var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.invert = (root = this.root)=>{
    if(!this.root) return null;
    [root.left,root.right] = [root.right, root.left];
    if(root.right) this.invert(root.right);
    if(root.left) this.invert(root.left);
  }
  // Only change code above this line
}

let tree = new BinarySearchTree()
console.log(tree.invert())