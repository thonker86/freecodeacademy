var Map = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key,value)=>{
    this.collection[key] = value;
  };

  this.remove = (key)=>{    
    this.has(key) ? delete this.collection[key] : false;
  };

  this.has = (key)=>{
    return this.collection.hasOwnProperty(key);
  };

  this.get = (key)=> {
    if(this.has(key)){
      return this.collection[key];
    }
  };

  this.values = ()=>{
    return Object.values(this.collection);
  };

  this.size = () => {
    return this.values().length;
  };
  
  this.clear = () =>{
    for(let el in this.collection){
      delete this.collection[el];
    }
  };
  // Only change code above this line
};

let map = new Map();

map.add('test',1)
map.add('tes2t',3)
map.remove('test4')
console.log(map.has('test'));
console.log(map.has('test3'));
console.log(map)
console.log(map.clear())