//Using Heap's algorithm https://www.wikiwand.com/en/Heap%27s_algorithm
function permAlone(str) {
  let arr = [...str]
  let permutations = [];
  let tmp;
  // Return 0 if str contains same character.
  if (str.match(/([a-z])\1+/) !== null && str.match(/([a-z])\1+/)[0] === str){
    return 0;
  }

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
      //console.log(permutations)
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
      //console.log(permutations)
    }
  }

  generate(arr.length);
  
  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(/([a-z])\1+/);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
permAlone("aab");