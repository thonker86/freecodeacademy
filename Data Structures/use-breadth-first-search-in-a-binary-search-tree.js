var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  
  this.levelOrder = (queue = [this.root], result=[])=>{
    if(!this.root) return null;
    let node = queue.shift();
    result.push(node.value);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
    if(queue.length) this.levelOrder(queue,result);
    return result;
  }

   this.reverseLevelOrder = (queue = [this.root], result=[])=>{
    if(!this.root) return null;
    let node = queue.shift();
    result.push(node.value);
    node.right ? queue.push(node.right): null;
    node.left ? queue.push(node.left) : null;
    queue.length ? this.reverseLevelOrder(queue,result) : null;
    return result;
  }
}