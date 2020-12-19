var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}

function isBinarySearchTree(tree) {
  // Only change code below this line
  if(tree.hasOwnProperty('root')){
    tree = tree.root;
  }
  if(Object.keys(tree).length > 3 || 
    !tree.hasOwnProperty('value') 
    || !tree.hasOwnProperty('right') 
    || !tree.hasOwnProperty('right')){
      return false;
  }
  
  if(tree.right !== null){
    if(tree.value >= tree.right.value){
      return false
    }
    return isBinarySearchTree(tree.right)
  }

  if(tree.left !== null){
    if(tree.value <= tree.left.value){
      return false
    }
    return isBinarySearchTree(tree.left);
  }
  return true
  // Only change code above this line
}
