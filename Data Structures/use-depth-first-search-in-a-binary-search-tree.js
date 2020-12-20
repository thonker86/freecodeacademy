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
  this.inorder = (root = this.root, treeArr = [])=>{    
    if(this.isEmpty()) return null;
    treeArr.push(root.value)
    if(root.left){
      this.inorder(root.left, treeArr);
    }
    if(root.right){
      this.inorder(root.right, treeArr);
    }
    return treeArr.sort((a,b)=>{return a-b});
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
  // Only change code above this line
}