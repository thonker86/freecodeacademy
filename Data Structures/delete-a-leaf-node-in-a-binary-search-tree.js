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
  // Only change code below this line
  this.remove = value =>{
    if(!this.root) return null;
    if(this.root.value == value) return this.root = null;
    this.removeLeaf = (root = this.root,found = null)=>{
      if(root.left){
        if(root.left.value == value && root.left.left == null && root.left.right == null){
          root.left = null
          return found = true;
        }else{
          this.removeLeaf(root.left, found)
        }
      }
      if(root.right){
        if(root.right.value == value && root.right.left == null && root.right.right == null){
          root.right = null
          return found = true;
        }else{
          this.removeLeaf(root.right, found)
        }
      }
      return found;
    }
    return this.removeLeaf()
  }
}

let tree = new BinarySearchTree()
tree.add(9);
// tree.add(20);
// tree.add(5);
// tree.add(6)
console.log(tree.root)
console.log(tree.remove(9));
console.log(tree.root)