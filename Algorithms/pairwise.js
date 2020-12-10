function pairwise(arr, arg) {
  let indexArr = [];
  for(let i = 0; i<arr.length; i++){ //first loop to get first element
    for(let j = 0; j<arr.length; j++){ //second loop to get second element
        if(j != i && //1st el not equal to 2nd el
            arr[i] + arr[j] == arg && //sum of both elements equal to arg
            !indexArr.includes(i) && //neither of the pair 
            !indexArr.includes(j)) //have been used before
          {
              indexArr.push(i)
              indexArr.push(j)              
          }
    }
  }
  return indexArr.reduce((acc, el )=> acc + el,0) //return the index arr summed
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 1, 1], 2)
pairwise([0, 0, 0, 0, 1, 1], 1)
pairwise([], 100)