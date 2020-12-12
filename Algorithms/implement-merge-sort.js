function mergeSort(array) {
  // Only change code below this line
  if(array.length ==1){
      return array;
    }else{
      let arr1 = array.slice(0, Math.floor(array.length/2))
      let arr2 = array.slice(Math.floor(array.length/2),array.length)
      return merge(mergeSort(arr1), mergeSort(arr2))
  }
  
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    return [...merged, ...array1, ...array2];
  }
  return msort(array);
  // Only change code above this line
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
