var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.remove = value =>{
    if(!this.root) return null;
    if(this.root.value == value) return this.root = null;
    this.removeLeaf = (root = this.root,removed = null)=>{
      if(value < root.value ){
        if(root.left){
          if(root.left.value == value && root.left.left == null && root.left.right == null){
            root.left = null
            return removed = true;
          }else{
            this.removeLeaf(root.left, removed)
          }
        }
      }else if(value > root.value){
        if(root.right){
          if(root.right.value == value && root.right.left == null 
            && root.right.right == null){
            root.right = null
            return removed = true;
          }else{
            this.removeLeaf(root.right, removed)
          }
        }
      }
      return removed;
    }
    return this.removeLeaf()
  }
}