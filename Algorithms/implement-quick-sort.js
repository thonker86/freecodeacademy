function quickSort(array) {
  // Only change code below this line
  function partition(arr, lo , hi){
    let i = lo;
    for(let k = lo + 1 ; k <= hi; k++){
      if(arr[k] < arr[lo]){
        i++;
        [arr[k], arr[i]] = [arr[i],arr[k]];
      }
    }
    [arr[lo],arr[i]] = [arr[i],arr[lo]];
    return i;
  }

  function qsort(arr, lo, hi){
    if(lo < hi){
      //console.log(lo, hi)
      let p = partition(arr, lo, hi);
      qsort(arr, lo, p - 1);
      qsort(arr, p + 1, hi);
    }
    console.log(arr)
    return arr;
  }
  
  return qsort(array, 0, array.length - 1);
  // Only change code above this line
}

quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])