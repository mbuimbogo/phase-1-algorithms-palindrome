function isPalindrome(word) {
  // Write your algorithm here
  // write the problem in my own word
  // write testcases
  // have my pseudocode
  // convert pseudocode map to code!
  // make a clean and readable code
  let newArray = word.split('');
  let reversedNewArray = newArray.reverse();
  let reversedString = reversedNewArray.join('')

  if (word === reversedString){
    return true;
  }
  else {
    return false
  }

}
console.log(isPalindrome('bob'))

/* 
  Add your pseudocode here
    let newArray = word.split('');
  let reversedNewArray = newArray.reverse();
  let reversedString = reversedNewArray.join('')

  if (word === reversedString){
    return true;
  }
  else {
    return false
  }

}
console.log(isPalindrome('bob'))
*/

/*
  Add written explanation of your solution here
  have a function isPalindrome with a string as the argument
  split the string into array
  reverse the array
  join the split array to a new string
  initialize if else
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
