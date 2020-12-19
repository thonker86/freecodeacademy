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
      return;
    }else{
      if(value == root.value){
        return null
      }else if(value < root.value){
        if(!root.left){
          root.left = newNode;
        }else{
          return this.add(value, root.left)
        }
      }else{
        if(!root.right){
          root.right = newNode;
        }else{
          return this.add(value, root.right)
        }
      }
    }
  }
  // Only change code below this line
  this.findLeafHeight = (root, height = 0, obj = {}) =>{    
    if(root.right == null && root.left==null){
      obj[root.value] = height
    }else{
      height++
      if(root.left != null){
        this.findLeafHeight(root.left,height, obj);
      }
      if(root.right !=null){
        this.findLeafHeight(root.right,height, obj)
      }
    }
    return obj
  }
  this.findMinHeight = ()=>{
    if(!this.root){
      return -1;
    }
    let leafs = this.findLeafHeight(this.root)
    return Math.min(...Object.values(leafs))
  }
  this.findMaxHeight = ()=>{
    if(!this.root){
      return -1;
    }
    let leafs = this.findLeafHeight(this.root)
    return Math.max(...Object.values(leafs))
  }
  this.isBalanced = ()=>{
    if(this.root){
      let leftLeafs = this.findLeafHeight(this.root.left)
      let rightLeafs = this.findLeafHeight(this.root.right)
      return [-1,0,1].includes(Math.max(...Object.values(rightLeafs)) - Math.max(...Object. values(leftLeafs)))
    }
    return false;
  }
  // Only change code above this line
}

let test = new BinarySearchTree();
 test.add(4);
 test.add(1);
 test.add(7);
 test.add(87);
 test.add(34);
 test.add(45);
 test.add(73);
 test.add(8);
//console.log(test.findMinHeight())
//console.log(test.findMaxHeight())
console.log(test.isBalanced())
displayTree(test)