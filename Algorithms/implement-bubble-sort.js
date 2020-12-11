function bubbleSort(array) {
  // Only change code below this line
  let newArr = []
  while(array.length > 0){
    let min = Math.min(...array);
    let minIndex = array.indexOf(min)
    array.splice(minIndex,1)
    newArr.push(min)
  }
  console.log(newArr)
  return newArr
  // Only change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
