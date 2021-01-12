function multiplesOf3and5(number) {
  let arr = [];
  for(let i = 0; i<number;i++){
    if(i%3 == 0 || i%5 == 0){
      arr.push(i);
    }
  }
  return arr.reduce((acc,el)=> acc+el)
  
}
console.log(multiplesOf3and5(1000))