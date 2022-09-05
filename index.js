function hasTargetSum(array, target) {
  // an empty object
  const seeNumber = {}
  // iterate thro each number in the array
  for (let i= 0; i<array.length; i++){
    // for current number identify a number that add to the target (number = target - array)
    const number = target - array[i]
    // checking if any key on our object is the number
    if (seeNumber[number])
    return true
    // or add that number to the object(i)
    seeNumber[array[i]] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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


