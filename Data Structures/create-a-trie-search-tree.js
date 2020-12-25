var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line
  this.root = new Node()
  this.add = (string)=>{
    if(string.length == 0) return null;
    let root = this.root;
    for(let i = 0; i < string.length; i++){
      let letter = string[i];
      if(!root.keys.has(letter)) {
        root.keys.set(letter, new Node());
      }
      if(i == string.length - 1) root.keys.get(letter).setEnd();
      root = root.keys.get(letter);
    }
  };
  this.print = (root = this.root, arr = [], string = '')=>{
    root.keys.forEach((value,key)=>{
      if(value.isEnd()) arr.push(string+key);
      this.print(value, arr, string+key);
    })
    return arr;
  }

  this.isWord = (test) => {
    if(test.length == 0) return false;
    let root = this.root;
    for(let i = 0; i < test.length; i++){
      let letter = test[i];
      if(!root.keys.has(letter)) return false
      if(i == test.length-1){
        if(!root.keys.get(letter).isEnd())return false
      }
      root = root.keys.get(letter);
    }
    return true;
  }
  // Only change code above this line
};

let trie = new Trie()
trie.add('code')
trie.add('abc')
trie.add('codes')
trie.add('coding')
console.log(trie.print())
console.log(trie.isWord(''))
