function Set() {
  // the var collection will hold our set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };
  this.add = function(el) {
    return this.has(el) ? false : Boolean(collection.push(el));
  };

  this.remove = (el)=> {
    if(this.has(el)){
      let index = collection.indexOf(el);
      collection.splice(index,1)
      return true;
    }else{
      return false;
    }
  };
  this.size = ()=>{
    return collection.length;
  }
}