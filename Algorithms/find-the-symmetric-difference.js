function sym(...args) {
  let proArr = []
  for(let arg of args){
    proArr.push(arg.reduce((acc, x) => {
		if(!acc.includes(x)){
		  acc.push(x)
		}
		return acc
	},[]))
  }
  let result = proArr.reduce((acc, arr) => {
    for(let ele of arr){
      if(acc.includes(ele)){
        acc.splice(acc.indexOf(ele), 1)
      }else{    
        acc.push(ele)
      }
    }
    return acc
  },[])
  return result.sort()
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
