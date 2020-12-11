function pairwise(arr, arg) {
  if(arr.length == 0){ //if empty array exit with 0;
    return 0;
  }
  return arr.reduce((acc, el, i, arr)=>{
    arr.forEach((el2, j)=>{
      if(j != i && //1st el not equal to 2nd el
        el + el2 == arg && //sum of both elements equal to arg
        !acc.includes(i) && //neither of the pair 
        !acc.includes(j)) //have been used before
      {
        acc.push(i, j);
      }
    });
    if(i == arr.length - 1){
      return acc.reduce((sum, el)=> sum + el, 0); // if last element reached return the sum
    }else{
      return acc; //if not return the index array for comparison
    }
  },[]);
}

pairwise([1,4,2,3,0,5], 7);
