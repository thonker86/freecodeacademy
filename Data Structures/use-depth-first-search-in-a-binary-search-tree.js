var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.inorder = (root = this.root, treeArr = [])=>{    
    if(this.isEmpty()) return null;
    if(root.left){
      this.inorder(root.left, treeArr);
    }
    treeArr.push(root.value)
    if(root.right){
      this.inorder(root.right, treeArr);
    }
    return treeArr;
  }

  this.preorder = (root = this.root, treeArr = [])=>{
    if(this.isEmpty()) return null;
    treeArr.push(root.value);
    if(root.left){
      this.preorder(root.left, treeArr);
    }
    if(root.right){
      this.preorder(root.right, treeArr);
    }
    return treeArr
  }
  this.postorder = (root = this.root, treeArr = [])=>{
    if(this.isEmpty()) return null;
    if(root.left){
      this.postorder(root.left, treeArr);
    }
    if(root.right){
      this.postorder(root.right, treeArr);
    }
    treeArr.push(root.value)
    return treeArr;
  }
  this.isEmpty = ()=>{
    return Boolean(!this.root)
  }
}