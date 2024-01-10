function hasTargetSum(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];

    // Check if the complement exists in the remaining part of the array
    if (array.slice(i + 1).includes(complement)) {
      console.log(array.slice(i + 1))
      return true;
    }
  }

  // No pair found
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    for i from 0 to length of array - 1:
        complement = target - array[i]
        
        // Check if complement exists in the remaining part of the array
        if array[i+1:] includes complement:
            return true
    
    // No pair found
    return false

*/

/*
  Add written explanation of your solution here
  Iterate Through Array Elements:

For each element at index i in the array, do the following:
Calculate the complement by subtracting the current array element (array[i]) from the target (target).
Check Complement Existence:

Check if the calculated complement exists in the remaining part of the array (from index i + 1 onwards).
If the complement is found in the subarray, it means there is a pair of elements that adds up to the target.
Return true.
No Pair Found:

If the loop completes without finding a pair, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
