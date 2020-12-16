var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = (value)=>{
    let newNode = new Node(value);
    if(this.root == null){
      this.root = newNode;
      return;
    }
    let root = this.root;
    while(root){
      if(value == root.value){
         return null;
      }else if(value < root.value){
        if(root.left == null){
         root.left = newNode;
        }else{
         root = root.left;
        }
      }else{
        if(root.right == null){
         root.right = newNode;
        }else{
         root = root.right;
        }
      }
    }
  }
  // Only change code above this line
}

let tree = new BinarySearchTree();
//console.log(tree);
tree.add(3)
tree.add(4)
//console.log(tree.add(4))
tree.add(6)
tree.add(7)
tree.add(5)
tree.add(2)
tree.add(1)
//console.log(tree.add(6))
console.log(tree.root);